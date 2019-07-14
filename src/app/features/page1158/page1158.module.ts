import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1158Component } from './page1158.component';

@NgModule({
  declarations: [Page1158Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1158Component }])],
  exports: [Page1158Component]
})
export class Page1158Module {}
