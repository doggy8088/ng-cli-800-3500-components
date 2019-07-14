import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1234Component } from './page1234.component';

@NgModule({
  declarations: [Page1234Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1234Component }])],
  exports: [Page1234Component]
})
export class Page1234Module {}
