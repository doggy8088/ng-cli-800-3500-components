import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1745Component } from './page1745.component';

@NgModule({
  declarations: [Page1745Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1745Component }])],
  exports: [Page1745Component]
})
export class Page1745Module {}
