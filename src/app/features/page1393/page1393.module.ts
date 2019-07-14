import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1393Component } from './page1393.component';

@NgModule({
  declarations: [Page1393Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1393Component }])],
  exports: [Page1393Component]
})
export class Page1393Module {}
