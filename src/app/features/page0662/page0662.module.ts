import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0662Component } from './page0662.component';

@NgModule({
  declarations: [Page0662Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0662Component }])],
  exports: [Page0662Component]
})
export class Page0662Module {}
