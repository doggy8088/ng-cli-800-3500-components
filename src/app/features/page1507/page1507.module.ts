import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1507Component } from './page1507.component';

@NgModule({
  declarations: [Page1507Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1507Component }])],
  exports: [Page1507Component]
})
export class Page1507Module {}
