import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1611Component } from './page1611.component';

@NgModule({
  declarations: [Page1611Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1611Component }])],
  exports: [Page1611Component]
})
export class Page1611Module {}
