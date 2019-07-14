import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0598Component } from './page0598.component';

@NgModule({
  declarations: [Page0598Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0598Component }])],
  exports: [Page0598Component]
})
export class Page0598Module {}
