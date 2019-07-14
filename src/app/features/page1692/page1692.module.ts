import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1692Component } from './page1692.component';

@NgModule({
  declarations: [Page1692Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1692Component }])],
  exports: [Page1692Component]
})
export class Page1692Module {}
