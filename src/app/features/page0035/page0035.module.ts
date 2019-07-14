import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0035Component } from './page0035.component';

@NgModule({
  declarations: [Page0035Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0035Component }])],
  exports: [Page0035Component]
})
export class Page0035Module {}
