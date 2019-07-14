import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1661Component } from './page1661.component';

@NgModule({
  declarations: [Page1661Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1661Component }])],
  exports: [Page1661Component]
})
export class Page1661Module {}
