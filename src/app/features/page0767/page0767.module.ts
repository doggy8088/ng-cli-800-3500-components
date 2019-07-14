import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0767Component } from './page0767.component';

@NgModule({
  declarations: [Page0767Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0767Component }])],
  exports: [Page0767Component]
})
export class Page0767Module {}
