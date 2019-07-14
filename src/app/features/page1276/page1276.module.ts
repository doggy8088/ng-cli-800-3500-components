import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1276Component } from './page1276.component';

@NgModule({
  declarations: [Page1276Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1276Component }])],
  exports: [Page1276Component]
})
export class Page1276Module {}
