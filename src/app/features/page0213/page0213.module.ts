import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0213Component } from './page0213.component';

@NgModule({
  declarations: [Page0213Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0213Component }])],
  exports: [Page0213Component]
})
export class Page0213Module {}
