import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0277Component } from './page0277.component';

@NgModule({
  declarations: [Page0277Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0277Component }])],
  exports: [Page0277Component]
})
export class Page0277Module {}
