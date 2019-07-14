import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0646Component } from './page0646.component';

@NgModule({
  declarations: [Page0646Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0646Component }])],
  exports: [Page0646Component]
})
export class Page0646Module {}
