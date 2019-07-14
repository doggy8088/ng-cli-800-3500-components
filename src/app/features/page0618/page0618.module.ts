import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0618Component } from './page0618.component';

@NgModule({
  declarations: [Page0618Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0618Component }])],
  exports: [Page0618Component]
})
export class Page0618Module {}
