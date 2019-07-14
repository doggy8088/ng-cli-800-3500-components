import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0467Component } from './page0467.component';

@NgModule({
  declarations: [Page0467Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0467Component }])],
  exports: [Page0467Component]
})
export class Page0467Module {}
