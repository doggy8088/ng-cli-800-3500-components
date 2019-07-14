import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0643Component } from './page0643.component';

@NgModule({
  declarations: [Page0643Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0643Component }])],
  exports: [Page0643Component]
})
export class Page0643Module {}
