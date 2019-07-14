import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1184Component } from './page1184.component';

@NgModule({
  declarations: [Page1184Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1184Component }])],
  exports: [Page1184Component]
})
export class Page1184Module {}
