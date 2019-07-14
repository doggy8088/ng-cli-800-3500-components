import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0964Component } from './page0964.component';

@NgModule({
  declarations: [Page0964Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0964Component }])],
  exports: [Page0964Component]
})
export class Page0964Module {}
