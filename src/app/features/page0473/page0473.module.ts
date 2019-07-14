import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0473Component } from './page0473.component';

@NgModule({
  declarations: [Page0473Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0473Component }])],
  exports: [Page0473Component]
})
export class Page0473Module {}
