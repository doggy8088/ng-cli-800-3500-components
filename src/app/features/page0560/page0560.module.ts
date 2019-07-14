import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0560Component } from './page0560.component';

@NgModule({
  declarations: [Page0560Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0560Component }])],
  exports: [Page0560Component]
})
export class Page0560Module {}
