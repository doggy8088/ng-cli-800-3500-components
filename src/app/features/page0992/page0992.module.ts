import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0992Component } from './page0992.component';

@NgModule({
  declarations: [Page0992Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0992Component }])],
  exports: [Page0992Component]
})
export class Page0992Module {}
