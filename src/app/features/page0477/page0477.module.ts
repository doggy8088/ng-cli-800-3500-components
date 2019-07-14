import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0477Component } from './page0477.component';

@NgModule({
  declarations: [Page0477Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0477Component }])],
  exports: [Page0477Component]
})
export class Page0477Module {}
