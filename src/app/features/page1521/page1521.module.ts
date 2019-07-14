import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1521Component } from './page1521.component';

@NgModule({
  declarations: [Page1521Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1521Component }])],
  exports: [Page1521Component]
})
export class Page1521Module {}
