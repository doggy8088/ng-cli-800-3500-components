import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0041Component } from './page0041.component';

@NgModule({
  declarations: [Page0041Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0041Component }])],
  exports: [Page0041Component]
})
export class Page0041Module {}
