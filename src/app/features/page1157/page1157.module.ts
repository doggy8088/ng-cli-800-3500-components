import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1157Component } from './page1157.component';

@NgModule({
  declarations: [Page1157Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1157Component }])],
  exports: [Page1157Component]
})
export class Page1157Module {}
