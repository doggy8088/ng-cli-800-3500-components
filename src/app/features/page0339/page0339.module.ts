import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0339Component } from './page0339.component';

@NgModule({
  declarations: [Page0339Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0339Component }])],
  exports: [Page0339Component]
})
export class Page0339Module {}
