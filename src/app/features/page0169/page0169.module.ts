import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0169Component } from './page0169.component';

@NgModule({
  declarations: [Page0169Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0169Component }])],
  exports: [Page0169Component]
})
export class Page0169Module {}
