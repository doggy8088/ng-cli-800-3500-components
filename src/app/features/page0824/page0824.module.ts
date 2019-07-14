import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0824Component } from './page0824.component';

@NgModule({
  declarations: [Page0824Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0824Component }])],
  exports: [Page0824Component]
})
export class Page0824Module {}
