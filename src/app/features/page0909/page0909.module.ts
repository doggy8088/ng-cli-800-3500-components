import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0909Component } from './page0909.component';

@NgModule({
  declarations: [Page0909Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0909Component }])],
  exports: [Page0909Component]
})
export class Page0909Module {}
