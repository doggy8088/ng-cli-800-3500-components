import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0158Component } from './page0158.component';

@NgModule({
  declarations: [Page0158Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0158Component }])],
  exports: [Page0158Component]
})
export class Page0158Module {}
