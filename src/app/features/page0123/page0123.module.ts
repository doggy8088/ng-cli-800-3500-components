import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0123Component } from './page0123.component';

@NgModule({
  declarations: [Page0123Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0123Component }])],
  exports: [Page0123Component]
})
export class Page0123Module {}
