import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0841Component } from './page0841.component';

@NgModule({
  declarations: [Page0841Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0841Component }])],
  exports: [Page0841Component]
})
export class Page0841Module {}
