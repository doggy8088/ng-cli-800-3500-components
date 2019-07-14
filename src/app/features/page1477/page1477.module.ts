import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1477Component } from './page1477.component';

@NgModule({
  declarations: [Page1477Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1477Component }])],
  exports: [Page1477Component]
})
export class Page1477Module {}
