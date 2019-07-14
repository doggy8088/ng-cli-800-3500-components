import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1420Component } from './page1420.component';

@NgModule({
  declarations: [Page1420Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1420Component }])],
  exports: [Page1420Component]
})
export class Page1420Module {}
