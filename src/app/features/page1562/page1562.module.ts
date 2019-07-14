import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1562Component } from './page1562.component';

@NgModule({
  declarations: [Page1562Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1562Component }])],
  exports: [Page1562Component]
})
export class Page1562Module {}
