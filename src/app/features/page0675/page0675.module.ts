import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0675Component } from './page0675.component';

@NgModule({
  declarations: [Page0675Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0675Component }])],
  exports: [Page0675Component]
})
export class Page0675Module {}
