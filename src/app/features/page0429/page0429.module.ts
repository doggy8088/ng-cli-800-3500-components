import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0429Component } from './page0429.component';

@NgModule({
  declarations: [Page0429Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0429Component }])],
  exports: [Page0429Component]
})
export class Page0429Module {}
