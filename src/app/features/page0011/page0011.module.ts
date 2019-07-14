import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0011Component } from './page0011.component';

@NgModule({
  declarations: [Page0011Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0011Component }])],
  exports: [Page0011Component]
})
export class Page0011Module {}
