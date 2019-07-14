import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1909Component } from './page1909.component';

@NgModule({
  declarations: [Page1909Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1909Component }])],
  exports: [Page1909Component]
})
export class Page1909Module {}
