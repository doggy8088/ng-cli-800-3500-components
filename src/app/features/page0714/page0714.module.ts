import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0714Component } from './page0714.component';

@NgModule({
  declarations: [Page0714Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0714Component }])],
  exports: [Page0714Component]
})
export class Page0714Module {}
