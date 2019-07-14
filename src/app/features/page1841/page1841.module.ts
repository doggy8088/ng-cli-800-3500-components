import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1841Component } from './page1841.component';

@NgModule({
  declarations: [Page1841Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1841Component }])],
  exports: [Page1841Component]
})
export class Page1841Module {}
