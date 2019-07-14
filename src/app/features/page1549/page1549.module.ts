import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1549Component } from './page1549.component';

@NgModule({
  declarations: [Page1549Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1549Component }])],
  exports: [Page1549Component]
})
export class Page1549Module {}
