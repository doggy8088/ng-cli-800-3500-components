import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0165Component } from './page0165.component';

@NgModule({
  declarations: [Page0165Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0165Component }])],
  exports: [Page0165Component]
})
export class Page0165Module {}
