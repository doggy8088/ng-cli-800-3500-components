import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2828Component } from './page2828.component';

@NgModule({
  declarations: [Page2828Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2828Component }])],
  exports: [Page2828Component]
})
export class Page2828Module {}
