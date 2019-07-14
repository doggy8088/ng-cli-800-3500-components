import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0627Component } from './page0627.component';

@NgModule({
  declarations: [Page0627Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0627Component }])],
  exports: [Page0627Component]
})
export class Page0627Module {}
