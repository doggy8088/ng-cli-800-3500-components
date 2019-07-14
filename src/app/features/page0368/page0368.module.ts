import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0368Component } from './page0368.component';

@NgModule({
  declarations: [Page0368Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0368Component }])],
  exports: [Page0368Component]
})
export class Page0368Module {}
