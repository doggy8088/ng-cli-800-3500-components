import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1123Component } from './page1123.component';

@NgModule({
  declarations: [Page1123Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1123Component }])],
  exports: [Page1123Component]
})
export class Page1123Module {}
