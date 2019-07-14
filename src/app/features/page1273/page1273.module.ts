import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1273Component } from './page1273.component';

@NgModule({
  declarations: [Page1273Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1273Component }])],
  exports: [Page1273Component]
})
export class Page1273Module {}
