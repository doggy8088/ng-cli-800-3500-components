import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0124Component } from './page0124.component';

@NgModule({
  declarations: [Page0124Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0124Component }])],
  exports: [Page0124Component]
})
export class Page0124Module {}
