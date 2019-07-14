import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0611Component } from './page0611.component';

@NgModule({
  declarations: [Page0611Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0611Component }])],
  exports: [Page0611Component]
})
export class Page0611Module {}
