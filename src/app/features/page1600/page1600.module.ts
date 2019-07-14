import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1600Component } from './page1600.component';

@NgModule({
  declarations: [Page1600Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1600Component }])],
  exports: [Page1600Component]
})
export class Page1600Module {}
