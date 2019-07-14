import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0356Component } from './page0356.component';

@NgModule({
  declarations: [Page0356Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0356Component }])],
  exports: [Page0356Component]
})
export class Page0356Module {}
