import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0797Component } from './page0797.component';

@NgModule({
  declarations: [Page0797Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0797Component }])],
  exports: [Page0797Component]
})
export class Page0797Module {}
