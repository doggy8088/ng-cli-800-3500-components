import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0346Component } from './page0346.component';

@NgModule({
  declarations: [Page0346Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0346Component }])],
  exports: [Page0346Component]
})
export class Page0346Module {}
