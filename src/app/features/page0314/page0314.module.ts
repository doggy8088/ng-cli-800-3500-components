import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0314Component } from './page0314.component';

@NgModule({
  declarations: [Page0314Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0314Component }])],
  exports: [Page0314Component]
})
export class Page0314Module {}
