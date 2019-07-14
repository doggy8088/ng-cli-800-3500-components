import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0502Component } from './page0502.component';

@NgModule({
  declarations: [Page0502Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0502Component }])],
  exports: [Page0502Component]
})
export class Page0502Module {}
