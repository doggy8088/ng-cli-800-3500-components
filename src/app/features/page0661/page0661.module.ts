import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0661Component } from './page0661.component';

@NgModule({
  declarations: [Page0661Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0661Component }])],
  exports: [Page0661Component]
})
export class Page0661Module {}
