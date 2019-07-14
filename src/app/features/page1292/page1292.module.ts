import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1292Component } from './page1292.component';

@NgModule({
  declarations: [Page1292Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1292Component }])],
  exports: [Page1292Component]
})
export class Page1292Module {}
