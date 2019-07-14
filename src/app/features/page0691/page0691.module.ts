import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0691Component } from './page0691.component';

@NgModule({
  declarations: [Page0691Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0691Component }])],
  exports: [Page0691Component]
})
export class Page0691Module {}
