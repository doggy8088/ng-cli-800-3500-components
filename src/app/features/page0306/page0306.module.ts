import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0306Component } from './page0306.component';

@NgModule({
  declarations: [Page0306Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0306Component }])],
  exports: [Page0306Component]
})
export class Page0306Module {}
