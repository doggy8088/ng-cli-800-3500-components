import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0524Component } from './page0524.component';

@NgModule({
  declarations: [Page0524Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0524Component }])],
  exports: [Page0524Component]
})
export class Page0524Module {}
