import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1817Component } from './page1817.component';

@NgModule({
  declarations: [Page1817Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1817Component }])],
  exports: [Page1817Component]
})
export class Page1817Module {}
