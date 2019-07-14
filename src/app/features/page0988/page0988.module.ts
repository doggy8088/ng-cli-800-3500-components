import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0988Component } from './page0988.component';

@NgModule({
  declarations: [Page0988Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0988Component }])],
  exports: [Page0988Component]
})
export class Page0988Module {}
