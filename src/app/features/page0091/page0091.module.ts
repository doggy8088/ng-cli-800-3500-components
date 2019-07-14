import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0091Component } from './page0091.component';

@NgModule({
  declarations: [Page0091Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0091Component }])],
  exports: [Page0091Component]
})
export class Page0091Module {}
