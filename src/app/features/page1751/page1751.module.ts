import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1751Component } from './page1751.component';

@NgModule({
  declarations: [Page1751Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1751Component }])],
  exports: [Page1751Component]
})
export class Page1751Module {}
