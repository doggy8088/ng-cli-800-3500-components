import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1011Component } from './page1011.component';

@NgModule({
  declarations: [Page1011Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1011Component }])],
  exports: [Page1011Component]
})
export class Page1011Module {}
