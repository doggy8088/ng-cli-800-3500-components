import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1484Component } from './page1484.component';

@NgModule({
  declarations: [Page1484Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1484Component }])],
  exports: [Page1484Component]
})
export class Page1484Module {}
