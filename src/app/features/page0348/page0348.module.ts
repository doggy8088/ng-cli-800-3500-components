import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0348Component } from './page0348.component';

@NgModule({
  declarations: [Page0348Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0348Component }])],
  exports: [Page0348Component]
})
export class Page0348Module {}
