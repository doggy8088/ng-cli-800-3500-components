import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1776Component } from './page1776.component';

@NgModule({
  declarations: [Page1776Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1776Component }])],
  exports: [Page1776Component]
})
export class Page1776Module {}
