import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0151Component } from './page0151.component';

@NgModule({
  declarations: [Page0151Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0151Component }])],
  exports: [Page0151Component]
})
export class Page0151Module {}
