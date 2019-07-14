import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0307Component } from './page0307.component';

@NgModule({
  declarations: [Page0307Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0307Component }])],
  exports: [Page0307Component]
})
export class Page0307Module {}
