import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1454Component } from './page1454.component';

@NgModule({
  declarations: [Page1454Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1454Component }])],
  exports: [Page1454Component]
})
export class Page1454Module {}
