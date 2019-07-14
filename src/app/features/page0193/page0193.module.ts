import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0193Component } from './page0193.component';

@NgModule({
  declarations: [Page0193Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0193Component }])],
  exports: [Page0193Component]
})
export class Page0193Module {}
