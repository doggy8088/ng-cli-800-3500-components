import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1583Component } from './page1583.component';

@NgModule({
  declarations: [Page1583Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1583Component }])],
  exports: [Page1583Component]
})
export class Page1583Module {}
