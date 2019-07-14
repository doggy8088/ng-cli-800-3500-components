import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0882Component } from './page0882.component';

@NgModule({
  declarations: [Page0882Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0882Component }])],
  exports: [Page0882Component]
})
export class Page0882Module {}
