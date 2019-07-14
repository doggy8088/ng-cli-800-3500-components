import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1238Component } from './page1238.component';

@NgModule({
  declarations: [Page1238Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1238Component }])],
  exports: [Page1238Component]
})
export class Page1238Module {}
