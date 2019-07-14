import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0570Component } from './page0570.component';

@NgModule({
  declarations: [Page0570Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0570Component }])],
  exports: [Page0570Component]
})
export class Page0570Module {}
