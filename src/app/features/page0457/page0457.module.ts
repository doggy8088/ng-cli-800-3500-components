import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0457Component } from './page0457.component';

@NgModule({
  declarations: [Page0457Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0457Component }])],
  exports: [Page0457Component]
})
export class Page0457Module {}
