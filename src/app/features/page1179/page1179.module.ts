import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1179Component } from './page1179.component';

@NgModule({
  declarations: [Page1179Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1179Component }])],
  exports: [Page1179Component]
})
export class Page1179Module {}
