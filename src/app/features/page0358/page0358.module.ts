import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0358Component } from './page0358.component';

@NgModule({
  declarations: [Page0358Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0358Component }])],
  exports: [Page0358Component]
})
export class Page0358Module {}
