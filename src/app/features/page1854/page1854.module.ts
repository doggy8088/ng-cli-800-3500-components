import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1854Component } from './page1854.component';

@NgModule({
  declarations: [Page1854Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1854Component }])],
  exports: [Page1854Component]
})
export class Page1854Module {}
