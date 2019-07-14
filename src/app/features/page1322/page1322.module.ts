import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1322Component } from './page1322.component';

@NgModule({
  declarations: [Page1322Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1322Component }])],
  exports: [Page1322Component]
})
export class Page1322Module {}
