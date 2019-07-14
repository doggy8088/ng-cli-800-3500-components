import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0274Component } from './page0274.component';

@NgModule({
  declarations: [Page0274Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0274Component }])],
  exports: [Page0274Component]
})
export class Page0274Module {}
