import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0696Component } from './page0696.component';

@NgModule({
  declarations: [Page0696Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0696Component }])],
  exports: [Page0696Component]
})
export class Page0696Module {}
