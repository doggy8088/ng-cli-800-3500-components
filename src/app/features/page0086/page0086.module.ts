import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0086Component } from './page0086.component';

@NgModule({
  declarations: [Page0086Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0086Component }])],
  exports: [Page0086Component]
})
export class Page0086Module {}
