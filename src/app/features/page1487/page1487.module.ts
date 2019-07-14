import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1487Component } from './page1487.component';

@NgModule({
  declarations: [Page1487Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1487Component }])],
  exports: [Page1487Component]
})
export class Page1487Module {}
