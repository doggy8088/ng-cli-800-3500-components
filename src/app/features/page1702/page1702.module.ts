import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1702Component } from './page1702.component';

@NgModule({
  declarations: [Page1702Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1702Component }])],
  exports: [Page1702Component]
})
export class Page1702Module {}
