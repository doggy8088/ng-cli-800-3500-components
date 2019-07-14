import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1640Component } from './page1640.component';

@NgModule({
  declarations: [Page1640Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1640Component }])],
  exports: [Page1640Component]
})
export class Page1640Module {}
