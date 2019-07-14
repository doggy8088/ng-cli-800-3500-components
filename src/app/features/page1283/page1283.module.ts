import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1283Component } from './page1283.component';

@NgModule({
  declarations: [Page1283Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1283Component }])],
  exports: [Page1283Component]
})
export class Page1283Module {}
