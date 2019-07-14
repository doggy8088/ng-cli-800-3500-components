import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0234Component } from './page0234.component';

@NgModule({
  declarations: [Page0234Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0234Component }])],
  exports: [Page0234Component]
})
export class Page0234Module {}
