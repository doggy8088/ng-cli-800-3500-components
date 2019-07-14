import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1277Component } from './page1277.component';

@NgModule({
  declarations: [Page1277Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1277Component }])],
  exports: [Page1277Component]
})
export class Page1277Module {}
