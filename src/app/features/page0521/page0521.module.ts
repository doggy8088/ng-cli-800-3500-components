import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0521Component } from './page0521.component';

@NgModule({
  declarations: [Page0521Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0521Component }])],
  exports: [Page0521Component]
})
export class Page0521Module {}
