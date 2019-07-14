import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1925Component } from './page1925.component';

@NgModule({
  declarations: [Page1925Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1925Component }])],
  exports: [Page1925Component]
})
export class Page1925Module {}
