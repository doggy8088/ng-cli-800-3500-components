import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1429Component } from './page1429.component';

@NgModule({
  declarations: [Page1429Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1429Component }])],
  exports: [Page1429Component]
})
export class Page1429Module {}
