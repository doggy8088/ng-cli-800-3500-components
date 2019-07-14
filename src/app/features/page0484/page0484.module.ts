import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0484Component } from './page0484.component';

@NgModule({
  declarations: [Page0484Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0484Component }])],
  exports: [Page0484Component]
})
export class Page0484Module {}
