import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0751Component } from './page0751.component';

@NgModule({
  declarations: [Page0751Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0751Component }])],
  exports: [Page0751Component]
})
export class Page0751Module {}
