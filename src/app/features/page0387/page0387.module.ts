import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0387Component } from './page0387.component';

@NgModule({
  declarations: [Page0387Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0387Component }])],
  exports: [Page0387Component]
})
export class Page0387Module {}
