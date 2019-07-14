import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0426Component } from './page0426.component';

@NgModule({
  declarations: [Page0426Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0426Component }])],
  exports: [Page0426Component]
})
export class Page0426Module {}
