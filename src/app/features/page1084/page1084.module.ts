import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1084Component } from './page1084.component';

@NgModule({
  declarations: [Page1084Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1084Component }])],
  exports: [Page1084Component]
})
export class Page1084Module {}
