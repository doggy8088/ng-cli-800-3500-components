import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0799Component } from './page0799.component';

@NgModule({
  declarations: [Page0799Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0799Component }])],
  exports: [Page0799Component]
})
export class Page0799Module {}
