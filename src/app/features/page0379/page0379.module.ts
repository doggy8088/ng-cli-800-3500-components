import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0379Component } from './page0379.component';

@NgModule({
  declarations: [Page0379Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0379Component }])],
  exports: [Page0379Component]
})
export class Page0379Module {}
