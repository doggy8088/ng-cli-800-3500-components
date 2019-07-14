import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0446Component } from './page0446.component';

@NgModule({
  declarations: [Page0446Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0446Component }])],
  exports: [Page0446Component]
})
export class Page0446Module {}
