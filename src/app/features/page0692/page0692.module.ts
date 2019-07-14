import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0692Component } from './page0692.component';

@NgModule({
  declarations: [Page0692Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0692Component }])],
  exports: [Page0692Component]
})
export class Page0692Module {}
