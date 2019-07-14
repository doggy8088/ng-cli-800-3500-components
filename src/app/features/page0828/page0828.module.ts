import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0828Component } from './page0828.component';

@NgModule({
  declarations: [Page0828Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0828Component }])],
  exports: [Page0828Component]
})
export class Page0828Module {}
