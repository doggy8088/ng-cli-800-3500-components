import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1004Component } from './page1004.component';

@NgModule({
  declarations: [Page1004Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1004Component }])],
  exports: [Page1004Component]
})
export class Page1004Module {}
