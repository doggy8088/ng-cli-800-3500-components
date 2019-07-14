import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1828Component } from './page1828.component';

@NgModule({
  declarations: [Page1828Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1828Component }])],
  exports: [Page1828Component]
})
export class Page1828Module {}
