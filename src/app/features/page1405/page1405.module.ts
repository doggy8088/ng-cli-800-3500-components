import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1405Component } from './page1405.component';

@NgModule({
  declarations: [Page1405Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1405Component }])],
  exports: [Page1405Component]
})
export class Page1405Module {}
