import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0815Component } from './page0815.component';

@NgModule({
  declarations: [Page0815Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0815Component }])],
  exports: [Page0815Component]
})
export class Page0815Module {}
