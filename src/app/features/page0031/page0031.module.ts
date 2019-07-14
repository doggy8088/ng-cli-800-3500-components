import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0031Component } from './page0031.component';

@NgModule({
  declarations: [Page0031Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0031Component }])],
  exports: [Page0031Component]
})
export class Page0031Module {}
