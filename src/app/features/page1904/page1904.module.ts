import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1904Component } from './page1904.component';

@NgModule({
  declarations: [Page1904Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1904Component }])],
  exports: [Page1904Component]
})
export class Page1904Module {}
