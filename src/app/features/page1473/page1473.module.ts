import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1473Component } from './page1473.component';

@NgModule({
  declarations: [Page1473Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1473Component }])],
  exports: [Page1473Component]
})
export class Page1473Module {}
