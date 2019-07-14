import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0941Component } from './page0941.component';

@NgModule({
  declarations: [Page0941Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0941Component }])],
  exports: [Page0941Component]
})
export class Page0941Module {}
