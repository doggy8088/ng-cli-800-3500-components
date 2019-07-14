import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0380Component } from './page0380.component';

@NgModule({
  declarations: [Page0380Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0380Component }])],
  exports: [Page0380Component]
})
export class Page0380Module {}
