import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0424Component } from './page0424.component';

@NgModule({
  declarations: [Page0424Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0424Component }])],
  exports: [Page0424Component]
})
export class Page0424Module {}
