import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0286Component } from './page0286.component';

@NgModule({
  declarations: [Page0286Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0286Component }])],
  exports: [Page0286Component]
})
export class Page0286Module {}
