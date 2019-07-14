import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0943Component } from './page0943.component';

@NgModule({
  declarations: [Page0943Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0943Component }])],
  exports: [Page0943Component]
})
export class Page0943Module {}
