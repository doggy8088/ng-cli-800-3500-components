import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1012Component } from './page1012.component';

@NgModule({
  declarations: [Page1012Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1012Component }])],
  exports: [Page1012Component]
})
export class Page1012Module {}
