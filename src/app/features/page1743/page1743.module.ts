import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1743Component } from './page1743.component';

@NgModule({
  declarations: [Page1743Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1743Component }])],
  exports: [Page1743Component]
})
export class Page1743Module {}
