import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0265Component } from './page0265.component';

@NgModule({
  declarations: [Page0265Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0265Component }])],
  exports: [Page0265Component]
})
export class Page0265Module {}
