import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0981Component } from './page0981.component';

@NgModule({
  declarations: [Page0981Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0981Component }])],
  exports: [Page0981Component]
})
export class Page0981Module {}
