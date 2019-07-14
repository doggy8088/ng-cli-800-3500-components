import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0622Component } from './page0622.component';

@NgModule({
  declarations: [Page0622Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0622Component }])],
  exports: [Page0622Component]
})
export class Page0622Module {}
