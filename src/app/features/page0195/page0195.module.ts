import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0195Component } from './page0195.component';

@NgModule({
  declarations: [Page0195Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0195Component }])],
  exports: [Page0195Component]
})
export class Page0195Module {}
