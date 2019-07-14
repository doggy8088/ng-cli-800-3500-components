import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1731Component } from './page1731.component';

@NgModule({
  declarations: [Page1731Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1731Component }])],
  exports: [Page1731Component]
})
export class Page1731Module {}
