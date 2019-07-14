import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0959Component } from './page0959.component';

@NgModule({
  declarations: [Page0959Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0959Component }])],
  exports: [Page0959Component]
})
export class Page0959Module {}
