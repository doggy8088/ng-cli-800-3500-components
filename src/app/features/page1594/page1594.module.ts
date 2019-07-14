import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1594Component } from './page1594.component';

@NgModule({
  declarations: [Page1594Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1594Component }])],
  exports: [Page1594Component]
})
export class Page1594Module {}
