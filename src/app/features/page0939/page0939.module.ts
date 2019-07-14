import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0939Component } from './page0939.component';

@NgModule({
  declarations: [Page0939Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0939Component }])],
  exports: [Page0939Component]
})
export class Page0939Module {}
