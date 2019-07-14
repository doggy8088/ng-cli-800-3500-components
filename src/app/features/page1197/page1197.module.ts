import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1197Component } from './page1197.component';

@NgModule({
  declarations: [Page1197Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1197Component }])],
  exports: [Page1197Component]
})
export class Page1197Module {}
