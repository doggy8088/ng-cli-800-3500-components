import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0309Component } from './page0309.component';

@NgModule({
  declarations: [Page0309Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0309Component }])],
  exports: [Page0309Component]
})
export class Page0309Module {}
