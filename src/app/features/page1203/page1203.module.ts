import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1203Component } from './page1203.component';

@NgModule({
  declarations: [Page1203Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1203Component }])],
  exports: [Page1203Component]
})
export class Page1203Module {}
