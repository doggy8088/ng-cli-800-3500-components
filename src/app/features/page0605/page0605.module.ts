import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0605Component } from './page0605.component';

@NgModule({
  declarations: [Page0605Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0605Component }])],
  exports: [Page0605Component]
})
export class Page0605Module {}
