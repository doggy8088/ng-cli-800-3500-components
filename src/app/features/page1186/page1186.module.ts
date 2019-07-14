import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1186Component } from './page1186.component';

@NgModule({
  declarations: [Page1186Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1186Component }])],
  exports: [Page1186Component]
})
export class Page1186Module {}
