import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1374Component } from './page1374.component';

@NgModule({
  declarations: [Page1374Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1374Component }])],
  exports: [Page1374Component]
})
export class Page1374Module {}
