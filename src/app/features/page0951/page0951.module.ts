import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0951Component } from './page0951.component';

@NgModule({
  declarations: [Page0951Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0951Component }])],
  exports: [Page0951Component]
})
export class Page0951Module {}
