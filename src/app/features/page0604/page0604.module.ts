import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0604Component } from './page0604.component';

@NgModule({
  declarations: [Page0604Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0604Component }])],
  exports: [Page0604Component]
})
export class Page0604Module {}
