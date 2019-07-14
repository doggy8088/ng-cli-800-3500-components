import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1320Component } from './page1320.component';

@NgModule({
  declarations: [Page1320Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1320Component }])],
  exports: [Page1320Component]
})
export class Page1320Module {}
