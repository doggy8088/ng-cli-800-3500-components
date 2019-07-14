import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1185Component } from './page1185.component';

@NgModule({
  declarations: [Page1185Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1185Component }])],
  exports: [Page1185Component]
})
export class Page1185Module {}
