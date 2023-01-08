import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { OrganizationComponent } from './organization/organization.component';
import { DocumentComponent } from './document/document.component';
import { ContributorComponent } from './contributor/contributor.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../material/material.module';
import { LayoutComponent } from './layout/layout.component';
import { OrganizationFormComponent } from './organization/organization-form/organization-form.component';
import { DocumentFormComponent } from './document/document-form/document-form.component';
import { ContributorFormComponent } from './contributor/contributor-form/contributor-form.component';


@NgModule({
  declarations: [
    OrganizationComponent,
    DocumentComponent,
    ContributorComponent,
    LoginComponent,
    LayoutComponent,
    OrganizationFormComponent,
    DocumentFormComponent,
    ContributorFormComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MaterialModule
  ]
})
export class PagesModule { }
