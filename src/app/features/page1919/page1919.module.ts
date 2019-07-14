import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1919Component } from './page1919.component';

@NgModule({
  declarations: [Page1919Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1919Component }])],
  exports: [Page1919Component]
})
export class Page1919Module {}
