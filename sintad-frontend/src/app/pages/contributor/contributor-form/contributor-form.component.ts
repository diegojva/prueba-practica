import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Contributor } from 'src/app/model/contributor';
import { ContributorService } from 'src/app/service/contributor.service';

@Component({
  selector: 'app-contributor-form',
  templateUrl: './contributor-form.component.html',
  styleUrls: ['./contributor-form.component.css']
})
export class ContributorFormComponent implements OnInit {

  id: number;
  isEdit: boolean;
  form: FormGroup;

  constructor(
    private contributorService: ContributorService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      'id': new FormControl(0),
      'name': new FormControl('', [Validators.required, Validators.maxLength(50)]),
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
      this.contributorService.findById(this.id).subscribe(data => {
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

    let contributor = new Contributor();
    contributor = this.form.value;

    if (this.isEdit) {
      this.contributorService.update(contributor).subscribe(() => {
        this.contributorService.findAll().subscribe(data => {
          this.contributorService.setDocumentChange(data);
          this.contributorService.setMessageChange('UPDATED!')
        });
      });
    } else {      
      this.contributorService.save(contributor).pipe(switchMap(()=>{        
        return this.contributorService.findAll();
      }))
      .subscribe(data => {
        this.contributorService.setDocumentChange(data);
        this.contributorService.setMessageChange("CREATED!")
      });
    }
    this.router.navigate(['/pages/contributor']);
  }

}
