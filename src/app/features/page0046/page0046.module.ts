import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0046Component } from './page0046.component';

@NgModule({
  declarations: [Page0046Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0046Component }])],
  exports: [Page0046Component]
})
export class Page0046Module {}
