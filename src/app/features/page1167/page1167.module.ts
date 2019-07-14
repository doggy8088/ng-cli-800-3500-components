import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1167Component } from './page1167.component';

@NgModule({
  declarations: [Page1167Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1167Component }])],
  exports: [Page1167Component]
})
export class Page1167Module {}
