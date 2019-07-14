import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1865Component } from './page1865.component';

@NgModule({
  declarations: [Page1865Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1865Component }])],
  exports: [Page1865Component]
})
export class Page1865Module {}
