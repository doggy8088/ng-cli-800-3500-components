import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0827Component } from './page0827.component';

@NgModule({
  declarations: [Page0827Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0827Component }])],
  exports: [Page0827Component]
})
export class Page0827Module {}
