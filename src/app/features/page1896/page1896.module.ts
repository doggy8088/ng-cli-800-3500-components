import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1896Component } from './page1896.component';

@NgModule({
  declarations: [Page1896Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1896Component }])],
  exports: [Page1896Component]
})
export class Page1896Module {}
