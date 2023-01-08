import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs';
import { Contributor } from 'src/app/model/contributor';
import { Document } from 'src/app/model/document';
import { Organization } from 'src/app/model/organization';
import { ContributorService } from 'src/app/service/contributor.service';
import { DocumentsService } from 'src/app/service/documents.service';
import { OrganizationService } from 'src/app/service/organization.service';
import { DocumentComponent } from '../../document/document.component';

@Component({
  selector: 'app-organization-form',
  templateUrl: './organization-form.component.html',
  styleUrls: ['./organization-form.component.css']
})
export class OrganizationFormComponent implements OnInit {

  id: number;
  isEdit: boolean;
  form: FormGroup;
  organizationEdit = new Organization();

  typesDocuments$: Observable<Document[]>;
  typesContributor$: Observable<Contributor[]>

  constructor(
    private organizationService: OrganizationService,
    private documentService: DocumentsService,
    private contributorService: ContributorService,
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      'id': new FormControl(0),
      'nroDocument': new FormControl('', [Validators.required]),
      'companyName': new FormControl('', [Validators.required, Validators.maxLength(100)]),
      'commercialName': new FormControl('', [Validators.required, Validators.maxLength(100)]),
      'address': new FormControl('', [Validators.required, Validators.maxLength(100)]),
      'phone': new FormControl('', [Validators.maxLength(9),Validators.minLength(9)]),
      'status': new FormControl(true),
      'document': new FormControl(null, [Validators.required]),
      'contributor': new FormControl(null,[Validators.required])
    });

    this.route.params.subscribe(data => {
      this.id = data['id'];
      this.isEdit = data['id'] != null;
      this.initForm();
    });

    this.getContributos();
    this.getTypesDocuments();
  }

  initForm() {
    if (this.isEdit) {
      this.organizationService.findById(this.id).subscribe(data => {
        this.organizationEdit = data;
        this.form.patchValue(data);
        this.form.patchValue({
          document: data.document.id,
          contributor: data.contributor.id
        });
      });
    }
  }

  get f_controls() {
    return this.form.controls;
  }

  operate() {
    if (this.form.invalid) { return; }

    let organization = new Organization();
    let document = new Document();
    let contributor = new Contributor();

    document.id = this.form.value['document'];
    contributor.id = this.form.value['contributor'];

    organization = this.form.value;
    organization.document = document;
    organization.contributor = contributor;

    if (this.isEdit) {
      this.organizationService.update(organization).subscribe(() => {
        this.organizationService.listPageable(0,5).subscribe(data => {
          this.organizationService.setOrganizationChange(data);
          this.organizationService.setMessageChange('UPDATED!')
        });
      });
    } else {      
      this.organizationService.save(organization).pipe(switchMap(()=>{        
        return this.organizationService.listPageable(0,5);
      }))
      .subscribe(data => {
        this.organizationService.setOrganizationChange(data);
        this.organizationService.setMessageChange("CREATED!")
      });
    }
    this.router.navigate(['/pages/organization']);
  }

  getTypesDocuments(){
    this.typesDocuments$ = this.documentService.findAll();
  }

  getContributos(){
    this.typesContributor$ = this.contributorService.findAll();
  }
}
