import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0876Component } from './page0876.component';

@NgModule({
  declarations: [Page0876Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0876Component }])],
  exports: [Page0876Component]
})
export class Page0876Module {}
