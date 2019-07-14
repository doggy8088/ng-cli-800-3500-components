import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0532Component } from './page0532.component';

@NgModule({
  declarations: [Page0532Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0532Component }])],
  exports: [Page0532Component]
})
export class Page0532Module {}
