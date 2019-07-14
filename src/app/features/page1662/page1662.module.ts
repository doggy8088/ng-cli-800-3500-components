import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1662Component } from './page1662.component';

@NgModule({
  declarations: [Page1662Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1662Component }])],
  exports: [Page1662Component]
})
export class Page1662Module {}
