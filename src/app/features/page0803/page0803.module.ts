import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0803Component } from './page0803.component';

@NgModule({
  declarations: [Page0803Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0803Component }])],
  exports: [Page0803Component]
})
export class Page0803Module {}
