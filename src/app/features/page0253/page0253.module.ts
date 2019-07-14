import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0253Component } from './page0253.component';

@NgModule({
  declarations: [Page0253Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0253Component }])],
  exports: [Page0253Component]
})
export class Page0253Module {}
