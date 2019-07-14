import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0978Component } from './page0978.component';

@NgModule({
  declarations: [Page0978Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0978Component }])],
  exports: [Page0978Component]
})
export class Page0978Module {}
