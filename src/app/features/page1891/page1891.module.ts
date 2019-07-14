import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1891Component } from './page1891.component';

@NgModule({
  declarations: [Page1891Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1891Component }])],
  exports: [Page1891Component]
})
export class Page1891Module {}
