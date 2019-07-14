import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0731Component } from './page0731.component';

@NgModule({
  declarations: [Page0731Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0731Component }])],
  exports: [Page0731Component]
})
export class Page0731Module {}
