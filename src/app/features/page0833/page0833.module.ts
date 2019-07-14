import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0833Component } from './page0833.component';

@NgModule({
  declarations: [Page0833Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0833Component }])],
  exports: [Page0833Component]
})
export class Page0833Module {}
