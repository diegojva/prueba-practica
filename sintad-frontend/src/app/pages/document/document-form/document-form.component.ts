import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Document } from 'src/app/model/document';
import { DocumentsService } from 'src/app/service/documents.service';

@Component({
  selector: 'app-document-form',
  templateUrl: './document-form.component.html',
  styleUrls: ['./document-form.component.css']
})
export class DocumentFormComponent implements OnInit {

  id: number;
  isEdit: boolean;
  form: FormGroup;

  constructor(
    private documentService: DocumentsService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      'id': new FormControl(0),
      'code': new FormControl('', [Validators.required,Validators.maxLength(20)]),
      'name': new FormControl('', [Validators.required, Validators.maxLength(100)]),
      'description': new FormControl('', [Validators.required, Validators.maxLength(200)]),
      'status': new FormControl('', [Validators.required])
    });

    this.route.params.subscribe(data => {
      this.id = data['id'];
      this.isEdit = data['id'] != null;
      this.initForm();
    });
  }

  initForm() {
    if (this.isEdit) {
      this.documentService.findById(this.id).subscribe(data => {
        this.form.patchValue(data);
        this.form.patchValue({ status: data.status.toString() });
      });
    }
  }

  get f_controls() {
    return this.form.controls;
  }

  operate() {
    if (this.form.invalid) { return; }

    let document = new Document();
    document = this.form.value;

    if (this.isEdit) {
      this.documentService.update(document).subscribe(() => {
        this.documentService.findAll().subscribe(data => {
          this.documentService.setDocumentChange(data);
          this.documentService.setMessageChange('UPDATED!')
        });
      });
    } else {      
      this.documentService.save(document).pipe(switchMap(()=>{        
        return this.documentService.findAll();
      }))
      .subscribe(data => {
        this.documentService.setDocumentChange(data);
        this.documentService.setMessageChange("CREATED!")
      });
    }
    this.router.navigate(['/pages/document']);
  }

}
