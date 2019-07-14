import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0210Component } from './page0210.component';

@NgModule({
  declarations: [Page0210Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0210Component }])],
  exports: [Page0210Component]
})
export class Page0210Module {}
