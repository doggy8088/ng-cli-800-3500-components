import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1095Component } from './page1095.component';

@NgModule({
  declarations: [Page1095Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1095Component }])],
  exports: [Page1095Component]
})
export class Page1095Module {}
