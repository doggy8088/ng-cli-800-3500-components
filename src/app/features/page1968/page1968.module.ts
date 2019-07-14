import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1968Component } from './page1968.component';

@NgModule({
  declarations: [Page1968Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1968Component }])],
  exports: [Page1968Component]
})
export class Page1968Module {}
