import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0500Component } from './page0500.component';

@NgModule({
  declarations: [Page0500Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0500Component }])],
  exports: [Page0500Component]
})
export class Page0500Module {}
