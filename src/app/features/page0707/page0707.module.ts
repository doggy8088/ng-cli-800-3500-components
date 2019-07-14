import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0707Component } from './page0707.component';

@NgModule({
  declarations: [Page0707Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0707Component }])],
  exports: [Page0707Component]
})
export class Page0707Module {}
