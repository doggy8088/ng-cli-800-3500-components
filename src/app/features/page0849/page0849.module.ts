import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0849Component } from './page0849.component';

@NgModule({
  declarations: [Page0849Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0849Component }])],
  exports: [Page0849Component]
})
export class Page0849Module {}
