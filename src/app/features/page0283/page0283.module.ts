import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0283Component } from './page0283.component';

@NgModule({
  declarations: [Page0283Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0283Component }])],
  exports: [Page0283Component]
})
export class Page0283Module {}
