import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0211Component } from './page0211.component';

@NgModule({
  declarations: [Page0211Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0211Component }])],
  exports: [Page0211Component]
})
export class Page0211Module {}
