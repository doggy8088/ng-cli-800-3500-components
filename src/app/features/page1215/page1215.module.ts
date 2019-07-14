import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1215Component } from './page1215.component';

@NgModule({
  declarations: [Page1215Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1215Component }])],
  exports: [Page1215Component]
})
export class Page1215Module {}
