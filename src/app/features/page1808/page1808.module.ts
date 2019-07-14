import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1808Component } from './page1808.component';

@NgModule({
  declarations: [Page1808Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1808Component }])],
  exports: [Page1808Component]
})
export class Page1808Module {}
