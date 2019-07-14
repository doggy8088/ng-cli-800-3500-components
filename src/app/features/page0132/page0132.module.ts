import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0132Component } from './page0132.component';

@NgModule({
  declarations: [Page0132Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0132Component }])],
  exports: [Page0132Component]
})
export class Page0132Module {}
