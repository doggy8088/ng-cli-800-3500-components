import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0503Component } from './page0503.component';

@NgModule({
  declarations: [Page0503Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0503Component }])],
  exports: [Page0503Component]
})
export class Page0503Module {}
