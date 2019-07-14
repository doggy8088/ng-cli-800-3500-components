import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1384Component } from './page1384.component';

@NgModule({
  declarations: [Page1384Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1384Component }])],
  exports: [Page1384Component]
})
export class Page1384Module {}
