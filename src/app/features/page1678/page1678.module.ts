import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1678Component } from './page1678.component';

@NgModule({
  declarations: [Page1678Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1678Component }])],
  exports: [Page1678Component]
})
export class Page1678Module {}
