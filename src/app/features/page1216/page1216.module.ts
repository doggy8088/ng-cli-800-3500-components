import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1216Component } from './page1216.component';

@NgModule({
  declarations: [Page1216Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1216Component }])],
  exports: [Page1216Component]
})
export class Page1216Module {}
