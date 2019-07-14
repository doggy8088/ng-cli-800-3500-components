import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1836Component } from './page1836.component';

@NgModule({
  declarations: [Page1836Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1836Component }])],
  exports: [Page1836Component]
})
export class Page1836Module {}
