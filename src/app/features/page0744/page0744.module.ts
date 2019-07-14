import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0744Component } from './page0744.component';

@NgModule({
  declarations: [Page0744Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0744Component }])],
  exports: [Page0744Component]
})
export class Page0744Module {}
