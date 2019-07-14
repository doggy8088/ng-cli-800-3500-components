import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1089Component } from './page1089.component';

@NgModule({
  declarations: [Page1089Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1089Component }])],
  exports: [Page1089Component]
})
export class Page1089Module {}
