import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0290Component } from './page0290.component';

@NgModule({
  declarations: [Page0290Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0290Component }])],
  exports: [Page0290Component]
})
export class Page0290Module {}
