import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1008Component } from './page1008.component';

@NgModule({
  declarations: [Page1008Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1008Component }])],
  exports: [Page1008Component]
})
export class Page1008Module {}
