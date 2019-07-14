import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0623Component } from './page0623.component';

@NgModule({
  declarations: [Page0623Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0623Component }])],
  exports: [Page0623Component]
})
export class Page0623Module {}
