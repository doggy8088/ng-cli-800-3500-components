import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1739Component } from './page1739.component';

@NgModule({
  declarations: [Page1739Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1739Component }])],
  exports: [Page1739Component]
})
export class Page1739Module {}
