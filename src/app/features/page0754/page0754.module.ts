import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0754Component } from './page0754.component';

@NgModule({
  declarations: [Page0754Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0754Component }])],
  exports: [Page0754Component]
})
export class Page0754Module {}
