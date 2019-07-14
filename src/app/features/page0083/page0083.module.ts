import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0083Component } from './page0083.component';

@NgModule({
  declarations: [Page0083Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0083Component }])],
  exports: [Page0083Component]
})
export class Page0083Module {}
