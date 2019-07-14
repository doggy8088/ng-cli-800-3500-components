import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2600Component } from './page2600.component';

@NgModule({
  declarations: [Page2600Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2600Component }])],
  exports: [Page2600Component]
})
export class Page2600Module {}
