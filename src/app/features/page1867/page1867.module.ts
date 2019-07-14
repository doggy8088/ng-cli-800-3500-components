import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1867Component } from './page1867.component';

@NgModule({
  declarations: [Page1867Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1867Component }])],
  exports: [Page1867Component]
})
export class Page1867Module {}
