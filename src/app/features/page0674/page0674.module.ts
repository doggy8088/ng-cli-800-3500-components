import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0674Component } from './page0674.component';

@NgModule({
  declarations: [Page0674Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0674Component }])],
  exports: [Page0674Component]
})
export class Page0674Module {}
