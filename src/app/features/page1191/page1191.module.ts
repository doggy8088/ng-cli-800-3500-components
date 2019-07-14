import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1191Component } from './page1191.component';

@NgModule({
  declarations: [Page1191Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1191Component }])],
  exports: [Page1191Component]
})
export class Page1191Module {}
