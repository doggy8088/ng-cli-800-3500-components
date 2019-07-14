import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0216Component } from './page0216.component';

@NgModule({
  declarations: [Page0216Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0216Component }])],
  exports: [Page0216Component]
})
export class Page0216Module {}
