import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0544Component } from './page0544.component';

@NgModule({
  declarations: [Page0544Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0544Component }])],
  exports: [Page0544Component]
})
export class Page0544Module {}
