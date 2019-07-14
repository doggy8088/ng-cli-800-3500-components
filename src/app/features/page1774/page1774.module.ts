import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1774Component } from './page1774.component';

@NgModule({
  declarations: [Page1774Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1774Component }])],
  exports: [Page1774Component]
})
export class Page1774Module {}
