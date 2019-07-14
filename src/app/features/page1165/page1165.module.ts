import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1165Component } from './page1165.component';

@NgModule({
  declarations: [Page1165Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1165Component }])],
  exports: [Page1165Component]
})
export class Page1165Module {}
