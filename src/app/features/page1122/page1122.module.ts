import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1122Component } from './page1122.component';

@NgModule({
  declarations: [Page1122Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1122Component }])],
  exports: [Page1122Component]
})
export class Page1122Module {}
