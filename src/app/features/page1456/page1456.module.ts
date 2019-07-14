import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1456Component } from './page1456.component';

@NgModule({
  declarations: [Page1456Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1456Component }])],
  exports: [Page1456Component]
})
export class Page1456Module {}
