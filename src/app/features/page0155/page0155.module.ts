import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0155Component } from './page0155.component';

@NgModule({
  declarations: [Page0155Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0155Component }])],
  exports: [Page0155Component]
})
export class Page0155Module {}
