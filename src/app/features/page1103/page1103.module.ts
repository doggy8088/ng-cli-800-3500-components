import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1103Component } from './page1103.component';

@NgModule({
  declarations: [Page1103Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1103Component }])],
  exports: [Page1103Component]
})
export class Page1103Module {}
