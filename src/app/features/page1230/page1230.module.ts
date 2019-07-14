import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1230Component } from './page1230.component';

@NgModule({
  declarations: [Page1230Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1230Component }])],
  exports: [Page1230Component]
})
export class Page1230Module {}
