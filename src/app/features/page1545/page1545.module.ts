import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1545Component } from './page1545.component';

@NgModule({
  declarations: [Page1545Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1545Component }])],
  exports: [Page1545Component]
})
export class Page1545Module {}
