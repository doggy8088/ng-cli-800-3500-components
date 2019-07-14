import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0118Component } from './page0118.component';

@NgModule({
  declarations: [Page0118Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0118Component }])],
  exports: [Page0118Component]
})
export class Page0118Module {}
