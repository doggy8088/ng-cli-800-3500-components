import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1959Component } from './page1959.component';

@NgModule({
  declarations: [Page1959Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1959Component }])],
  exports: [Page1959Component]
})
export class Page1959Module {}
