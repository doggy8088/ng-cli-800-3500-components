import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0929Component } from './page0929.component';

@NgModule({
  declarations: [Page0929Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0929Component }])],
  exports: [Page0929Component]
})
export class Page0929Module {}
