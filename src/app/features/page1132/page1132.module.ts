import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1132Component } from './page1132.component';

@NgModule({
  declarations: [Page1132Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1132Component }])],
  exports: [Page1132Component]
})
export class Page1132Module {}
