import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0185Component } from './page0185.component';

@NgModule({
  declarations: [Page0185Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0185Component }])],
  exports: [Page0185Component]
})
export class Page0185Module {}
