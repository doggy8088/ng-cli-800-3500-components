import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1002Component } from './page1002.component';

@NgModule({
  declarations: [Page1002Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1002Component }])],
  exports: [Page1002Component]
})
export class Page1002Module {}
