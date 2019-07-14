import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0718Component } from './page0718.component';

@NgModule({
  declarations: [Page0718Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0718Component }])],
  exports: [Page0718Component]
})
export class Page0718Module {}
