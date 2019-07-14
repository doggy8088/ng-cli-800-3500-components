import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0089Component } from './page0089.component';

@NgModule({
  declarations: [Page0089Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0089Component }])],
  exports: [Page0089Component]
})
export class Page0089Module {}
