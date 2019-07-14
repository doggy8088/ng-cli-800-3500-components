import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0301Component } from './page0301.component';

@NgModule({
  declarations: [Page0301Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0301Component }])],
  exports: [Page0301Component]
})
export class Page0301Module {}
