import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0562Component } from './page0562.component';

@NgModule({
  declarations: [Page0562Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0562Component }])],
  exports: [Page0562Component]
})
export class Page0562Module {}
