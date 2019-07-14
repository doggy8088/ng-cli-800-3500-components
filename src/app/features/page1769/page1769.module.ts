import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1769Component } from './page1769.component';

@NgModule({
  declarations: [Page1769Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1769Component }])],
  exports: [Page1769Component]
})
export class Page1769Module {}
