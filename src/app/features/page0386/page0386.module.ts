import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0386Component } from './page0386.component';

@NgModule({
  declarations: [Page0386Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0386Component }])],
  exports: [Page0386Component]
})
export class Page0386Module {}
