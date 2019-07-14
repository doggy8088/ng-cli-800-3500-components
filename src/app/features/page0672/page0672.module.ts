import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0672Component } from './page0672.component';

@NgModule({
  declarations: [Page0672Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0672Component }])],
  exports: [Page0672Component]
})
export class Page0672Module {}
