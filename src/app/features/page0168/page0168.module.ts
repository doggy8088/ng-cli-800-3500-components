import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0168Component } from './page0168.component';

@NgModule({
  declarations: [Page0168Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0168Component }])],
  exports: [Page0168Component]
})
export class Page0168Module {}
