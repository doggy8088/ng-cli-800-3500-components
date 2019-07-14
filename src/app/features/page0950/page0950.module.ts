import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0950Component } from './page0950.component';

@NgModule({
  declarations: [Page0950Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0950Component }])],
  exports: [Page0950Component]
})
export class Page0950Module {}
