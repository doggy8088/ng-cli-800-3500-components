import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0784Component } from './page0784.component';

@NgModule({
  declarations: [Page0784Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0784Component }])],
  exports: [Page0784Component]
})
export class Page0784Module {}
