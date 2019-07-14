import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0818Component } from './page0818.component';

@NgModule({
  declarations: [Page0818Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0818Component }])],
  exports: [Page0818Component]
})
export class Page0818Module {}
