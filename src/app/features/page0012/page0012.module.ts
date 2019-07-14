import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0012Component } from './page0012.component';

@NgModule({
  declarations: [Page0012Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0012Component }])],
  exports: [Page0012Component]
})
export class Page0012Module {}
