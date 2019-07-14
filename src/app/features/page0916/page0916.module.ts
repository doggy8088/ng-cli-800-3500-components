import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0916Component } from './page0916.component';

@NgModule({
  declarations: [Page0916Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0916Component }])],
  exports: [Page0916Component]
})
export class Page0916Module {}
