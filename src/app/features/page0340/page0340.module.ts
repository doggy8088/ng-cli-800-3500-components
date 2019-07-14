import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0340Component } from './page0340.component';

@NgModule({
  declarations: [Page0340Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0340Component }])],
  exports: [Page0340Component]
})
export class Page0340Module {}
