import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0078Component } from './page0078.component';

@NgModule({
  declarations: [Page0078Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0078Component }])],
  exports: [Page0078Component]
})
export class Page0078Module {}
