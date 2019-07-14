import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0594Component } from './page0594.component';

@NgModule({
  declarations: [Page0594Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0594Component }])],
  exports: [Page0594Component]
})
export class Page0594Module {}
