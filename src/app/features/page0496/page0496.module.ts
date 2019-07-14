import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0496Component } from './page0496.component';

@NgModule({
  declarations: [Page0496Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0496Component }])],
  exports: [Page0496Component]
})
export class Page0496Module {}
