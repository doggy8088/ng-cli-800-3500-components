import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0542Component } from './page0542.component';

@NgModule({
  declarations: [Page0542Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0542Component }])],
  exports: [Page0542Component]
})
export class Page0542Module {}
