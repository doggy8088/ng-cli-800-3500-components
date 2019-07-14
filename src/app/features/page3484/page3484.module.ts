import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page3484Component } from './page3484.component';

@NgModule({
  declarations: [Page3484Component],
  imports: [RouterModule.forChild([{ path: '', component: Page3484Component }])],
  exports: [Page3484Component]
})
export class Page3484Module {}
