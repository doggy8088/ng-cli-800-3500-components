import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0113Component } from './page0113.component';

@NgModule({
  declarations: [Page0113Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0113Component }])],
  exports: [Page0113Component]
})
export class Page0113Module {}
