import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1065Component } from './page1065.component';

@NgModule({
  declarations: [Page1065Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1065Component }])],
  exports: [Page1065Component]
})
export class Page1065Module {}
