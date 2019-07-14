import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0530Component } from './page0530.component';

@NgModule({
  declarations: [Page0530Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0530Component }])],
  exports: [Page0530Component]
})
export class Page0530Module {}
