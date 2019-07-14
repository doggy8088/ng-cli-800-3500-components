import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1418Component } from './page1418.component';

@NgModule({
  declarations: [Page1418Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1418Component }])],
  exports: [Page1418Component]
})
export class Page1418Module {}
