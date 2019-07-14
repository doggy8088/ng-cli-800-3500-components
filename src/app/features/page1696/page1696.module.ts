import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1696Component } from './page1696.component';

@NgModule({
  declarations: [Page1696Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1696Component }])],
  exports: [Page1696Component]
})
export class Page1696Module {}
