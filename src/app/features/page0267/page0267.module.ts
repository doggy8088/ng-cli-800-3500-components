import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0267Component } from './page0267.component';

@NgModule({
  declarations: [Page0267Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0267Component }])],
  exports: [Page0267Component]
})
export class Page0267Module {}
