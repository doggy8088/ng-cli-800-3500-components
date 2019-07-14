import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1496Component } from './page1496.component';

@NgModule({
  declarations: [Page1496Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1496Component }])],
  exports: [Page1496Component]
})
export class Page1496Module {}
