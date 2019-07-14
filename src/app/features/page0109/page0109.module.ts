import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0109Component } from './page0109.component';

@NgModule({
  declarations: [Page0109Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0109Component }])],
  exports: [Page0109Component]
})
export class Page0109Module {}
