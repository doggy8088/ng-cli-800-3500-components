import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0121Component } from './page0121.component';

@NgModule({
  declarations: [Page0121Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0121Component }])],
  exports: [Page0121Component]
})
export class Page0121Module {}
