import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0408Component } from './page0408.component';

@NgModule({
  declarations: [Page0408Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0408Component }])],
  exports: [Page0408Component]
})
export class Page0408Module {}
