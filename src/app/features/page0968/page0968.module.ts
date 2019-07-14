import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0968Component } from './page0968.component';

@NgModule({
  declarations: [Page0968Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0968Component }])],
  exports: [Page0968Component]
})
export class Page0968Module {}
