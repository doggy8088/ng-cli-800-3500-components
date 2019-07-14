import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1408Component } from './page1408.component';

@NgModule({
  declarations: [Page1408Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1408Component }])],
  exports: [Page1408Component]
})
export class Page1408Module {}
