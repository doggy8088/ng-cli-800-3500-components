import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1714Component } from './page1714.component';

@NgModule({
  declarations: [Page1714Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1714Component }])],
  exports: [Page1714Component]
})
export class Page1714Module {}
