import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0983Component } from './page0983.component';

@NgModule({
  declarations: [Page0983Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0983Component }])],
  exports: [Page0983Component]
})
export class Page0983Module {}
