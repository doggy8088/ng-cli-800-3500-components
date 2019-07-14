import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0004Component } from './page0004.component';

@NgModule({
  declarations: [Page0004Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0004Component }])],
  exports: [Page0004Component]
})
export class Page0004Module {}
