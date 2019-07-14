import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0225Component } from './page0225.component';

@NgModule({
  declarations: [Page0225Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0225Component }])],
  exports: [Page0225Component]
})
export class Page0225Module {}
