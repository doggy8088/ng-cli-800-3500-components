import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0511Component } from './page0511.component';

@NgModule({
  declarations: [Page0511Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0511Component }])],
  exports: [Page0511Component]
})
export class Page0511Module {}
