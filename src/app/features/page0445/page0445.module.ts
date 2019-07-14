import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0445Component } from './page0445.component';

@NgModule({
  declarations: [Page0445Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0445Component }])],
  exports: [Page0445Component]
})
export class Page0445Module {}
