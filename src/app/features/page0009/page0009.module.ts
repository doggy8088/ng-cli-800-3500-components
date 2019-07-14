import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0009Component } from './page0009.component';

@NgModule({
  declarations: [Page0009Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0009Component }])],
  exports: [Page0009Component]
})
export class Page0009Module {}
