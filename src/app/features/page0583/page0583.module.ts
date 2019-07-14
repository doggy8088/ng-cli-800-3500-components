import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0583Component } from './page0583.component';

@NgModule({
  declarations: [Page0583Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0583Component }])],
  exports: [Page0583Component]
})
export class Page0583Module {}
