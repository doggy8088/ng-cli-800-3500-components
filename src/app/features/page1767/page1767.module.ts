import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1767Component } from './page1767.component';

@NgModule({
  declarations: [Page1767Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1767Component }])],
  exports: [Page1767Component]
})
export class Page1767Module {}
