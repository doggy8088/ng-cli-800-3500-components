import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1371Component } from './page1371.component';

@NgModule({
  declarations: [Page1371Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1371Component }])],
  exports: [Page1371Component]
})
export class Page1371Module {}
