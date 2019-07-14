import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1341Component } from './page1341.component';

@NgModule({
  declarations: [Page1341Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1341Component }])],
  exports: [Page1341Component]
})
export class Page1341Module {}
