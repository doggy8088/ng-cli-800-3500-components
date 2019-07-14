import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1086Component } from './page1086.component';

@NgModule({
  declarations: [Page1086Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1086Component }])],
  exports: [Page1086Component]
})
export class Page1086Module {}
