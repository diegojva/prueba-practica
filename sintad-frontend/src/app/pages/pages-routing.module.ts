import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContributorFormComponent } from './contributor/contributor-form/contributor-form.component';
import { ContributorComponent } from './contributor/contributor.component';
import { DocumentFormComponent } from './document/document-form/document-form.component';
import { DocumentComponent } from './document/document.component';
import { OrganizationFormComponent } from './organization/organization-form/organization-form.component';
import { OrganizationComponent } from './organization/organization.component';

const routes: Routes = [
  {
    path: 'organization',
    component: OrganizationComponent,
  },
  {
    path: 'organization/form-create',
    component: OrganizationFormComponent,
  },
  {
    path: 'organization/edit/:id',
    component: OrganizationFormComponent,
  },
  {
    path: 'document',
    component: DocumentComponent,
  },
  {
    path: 'document/form-create',
    component: DocumentFormComponent,
  },
  {
    path: 'document/edit/:id',
    component: DocumentFormComponent,
  },
  {
    path: 'contributor',
    component: ContributorComponent,
  },
  {
    path: 'contributor/form-create',
    component: ContributorFormComponent,
  },
  {
    path: 'contributor/edit/:id',
    component: ContributorFormComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
