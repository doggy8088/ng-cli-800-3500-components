import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0886Component } from './page0886.component';

@NgModule({
  declarations: [Page0886Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0886Component }])],
  exports: [Page0886Component]
})
export class Page0886Module {}
