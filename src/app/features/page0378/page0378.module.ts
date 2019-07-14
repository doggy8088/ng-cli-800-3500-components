import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0378Component } from './page0378.component';

@NgModule({
  declarations: [Page0378Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0378Component }])],
  exports: [Page0378Component]
})
export class Page0378Module {}
