import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1253Component } from './page1253.component';

@NgModule({
  declarations: [Page1253Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1253Component }])],
  exports: [Page1253Component]
})
export class Page1253Module {}
