import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1803Component } from './page1803.component';

@NgModule({
  declarations: [Page1803Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1803Component }])],
  exports: [Page1803Component]
})
export class Page1803Module {}
