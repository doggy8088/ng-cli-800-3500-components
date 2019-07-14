import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1088Component } from './page1088.component';

@NgModule({
  declarations: [Page1088Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1088Component }])],
  exports: [Page1088Component]
})
export class Page1088Module {}
