import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0607Component } from './page0607.component';

@NgModule({
  declarations: [Page0607Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0607Component }])],
  exports: [Page0607Component]
})
export class Page0607Module {}
