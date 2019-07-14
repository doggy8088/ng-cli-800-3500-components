import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1920Component } from './page1920.component';

@NgModule({
  declarations: [Page1920Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1920Component }])],
  exports: [Page1920Component]
})
export class Page1920Module {}
