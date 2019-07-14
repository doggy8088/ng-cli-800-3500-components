import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0854Component } from './page0854.component';

@NgModule({
  declarations: [Page0854Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0854Component }])],
  exports: [Page0854Component]
})
export class Page0854Module {}
