import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0624Component } from './page0624.component';

@NgModule({
  declarations: [Page0624Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0624Component }])],
  exports: [Page0624Component]
})
export class Page0624Module {}
