import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0953Component } from './page0953.component';

@NgModule({
  declarations: [Page0953Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0953Component }])],
  exports: [Page0953Component]
})
export class Page0953Module {}
