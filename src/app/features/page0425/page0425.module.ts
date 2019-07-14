import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0425Component } from './page0425.component';

@NgModule({
  declarations: [Page0425Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0425Component }])],
  exports: [Page0425Component]
})
export class Page0425Module {}
