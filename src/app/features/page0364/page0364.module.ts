import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0364Component } from './page0364.component';

@NgModule({
  declarations: [Page0364Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0364Component }])],
  exports: [Page0364Component]
})
export class Page0364Module {}
