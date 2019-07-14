import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0315Component } from './page0315.component';

@NgModule({
  declarations: [Page0315Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0315Component }])],
  exports: [Page0315Component]
})
export class Page0315Module {}
