import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1642Component } from './page1642.component';

@NgModule({
  declarations: [Page1642Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1642Component }])],
  exports: [Page1642Component]
})
export class Page1642Module {}
