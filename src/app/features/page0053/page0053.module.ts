import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0053Component } from './page0053.component';

@NgModule({
  declarations: [Page0053Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0053Component }])],
  exports: [Page0053Component]
})
export class Page0053Module {}
