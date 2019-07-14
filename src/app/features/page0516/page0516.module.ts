import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page0516Component } from './page0516.component';

@NgModule({
  declarations: [Page0516Component],
  imports: [RouterModule.forChild([{ path: '', component: Page0516Component }])],
  exports: [Page0516Component]
})
export class Page0516Module {}
