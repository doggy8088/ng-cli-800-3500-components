import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0510Component } from './page0510.component';

@NgModule({
  declarations: [Page0510Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0510Component }])],
  exports: [Page0510Component]
})
export class Page0510Module {}
