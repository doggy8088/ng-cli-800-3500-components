import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1516Component } from './page1516.component';

@NgModule({
  declarations: [Page1516Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1516Component }])],
  exports: [Page1516Component]
})
export class Page1516Module {}
