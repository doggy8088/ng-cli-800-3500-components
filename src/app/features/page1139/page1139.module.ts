import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1139Component } from './page1139.component';

@NgModule({
  declarations: [Page1139Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1139Component }])],
  exports: [Page1139Component]
})
export class Page1139Module {}
