import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0487Component } from './page0487.component';

@NgModule({
  declarations: [Page0487Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0487Component }])],
  exports: [Page0487Component]
})
export class Page0487Module {}
