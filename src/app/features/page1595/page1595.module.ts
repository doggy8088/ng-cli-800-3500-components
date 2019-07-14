import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1595Component } from './page1595.component';

@NgModule({
  declarations: [Page1595Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1595Component }])],
  exports: [Page1595Component]
})
export class Page1595Module {}
