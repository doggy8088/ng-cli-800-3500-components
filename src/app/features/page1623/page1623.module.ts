import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1623Component } from './page1623.component';

@NgModule({
  declarations: [Page1623Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1623Component }])],
  exports: [Page1623Component]
})
export class Page1623Module {}
