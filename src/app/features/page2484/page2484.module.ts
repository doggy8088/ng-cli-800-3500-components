import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page2484Component } from './page2484.component';

@NgModule({
  declarations: [Page2484Component],
  imports: [RouterModule.forChild([{ path: '', component: Page2484Component }])],
  exports: [Page2484Component]
})
export class Page2484Module {}
