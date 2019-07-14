import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1602Component } from './page1602.component';

@NgModule({
  declarations: [Page1602Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1602Component }])],
  exports: [Page1602Component]
})
export class Page1602Module {}
