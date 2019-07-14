import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0600Component } from './page0600.component';

@NgModule({
  declarations: [Page0600Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0600Component }])],
  exports: [Page0600Component]
})
export class Page0600Module {}
