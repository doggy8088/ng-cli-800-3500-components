import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1607Component } from './page1607.component';

@NgModule({
  declarations: [Page1607Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1607Component }])],
  exports: [Page1607Component]
})
export class Page1607Module {}
