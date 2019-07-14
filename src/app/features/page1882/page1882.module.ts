import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1882Component } from './page1882.component';

@NgModule({
  declarations: [Page1882Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1882Component }])],
  exports: [Page1882Component]
})
export class Page1882Module {}
