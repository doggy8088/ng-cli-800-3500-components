import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1472Component } from './page1472.component';

@NgModule({
  declarations: [Page1472Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1472Component }])],
  exports: [Page1472Component]
})
export class Page1472Module {}
