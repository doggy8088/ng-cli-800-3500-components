import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0184Component } from './page0184.component';

@NgModule({
  declarations: [Page0184Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0184Component }])],
  exports: [Page0184Component]
})
export class Page0184Module {}
