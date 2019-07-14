import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1644Component } from './page1644.component';

@NgModule({
  declarations: [Page1644Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1644Component }])],
  exports: [Page1644Component]
})
export class Page1644Module {}
