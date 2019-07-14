import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0126Component } from './page0126.component';

@NgModule({
  declarations: [Page0126Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0126Component }])],
  exports: [Page0126Component]
})
export class Page0126Module {}
