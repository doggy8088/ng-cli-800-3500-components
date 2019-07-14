import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0564Component } from './page0564.component';

@NgModule({
  declarations: [Page0564Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0564Component }])],
  exports: [Page0564Component]
})
export class Page0564Module {}
