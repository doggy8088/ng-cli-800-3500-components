import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1788Component } from './page1788.component';

@NgModule({
  declarations: [Page1788Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1788Component }])],
  exports: [Page1788Component]
})
export class Page1788Module {}
