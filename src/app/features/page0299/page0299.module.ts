import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0299Component } from './page0299.component';

@NgModule({
  declarations: [Page0299Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0299Component }])],
  exports: [Page0299Component]
})
export class Page0299Module {}
