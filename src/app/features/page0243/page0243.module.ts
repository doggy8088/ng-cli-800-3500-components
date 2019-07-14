import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0243Component } from './page0243.component';

@NgModule({
  declarations: [Page0243Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0243Component }])],
  exports: [Page0243Component]
})
export class Page0243Module {}
