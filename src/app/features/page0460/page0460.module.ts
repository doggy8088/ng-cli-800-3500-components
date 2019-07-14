import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0460Component } from './page0460.component';

@NgModule({
  declarations: [Page0460Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0460Component }])],
  exports: [Page0460Component]
})
export class Page0460Module {}
