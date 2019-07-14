import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0279Component } from './page0279.component';

@NgModule({
  declarations: [Page0279Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0279Component }])],
  exports: [Page0279Component]
})
export class Page0279Module {}
