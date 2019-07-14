import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0465Component } from './page0465.component';

@NgModule({
  declarations: [Page0465Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0465Component }])],
  exports: [Page0465Component]
})
export class Page0465Module {}
