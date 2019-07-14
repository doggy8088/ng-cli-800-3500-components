import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0989Component } from './page0989.component';

@NgModule({
  declarations: [Page0989Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0989Component }])],
  exports: [Page0989Component]
})
export class Page0989Module {}
