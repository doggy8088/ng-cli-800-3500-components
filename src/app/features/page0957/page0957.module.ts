import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0957Component } from './page0957.component';

@NgModule({
  declarations: [Page0957Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0957Component }])],
  exports: [Page0957Component]
})
export class Page0957Module {}
