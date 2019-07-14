import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0801Component } from './page0801.component';

@NgModule({
  declarations: [Page0801Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0801Component }])],
  exports: [Page0801Component]
})
export class Page0801Module {}
