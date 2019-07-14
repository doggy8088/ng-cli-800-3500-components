import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1214Component } from './page1214.component';

@NgModule({
  declarations: [Page1214Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1214Component }])],
  exports: [Page1214Component]
})
export class Page1214Module {}
