import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1047Component } from './page1047.component';

@NgModule({
  declarations: [Page1047Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1047Component }])],
  exports: [Page1047Component]
})
export class Page1047Module {}
