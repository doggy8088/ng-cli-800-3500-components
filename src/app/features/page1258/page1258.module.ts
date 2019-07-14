import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1258Component } from './page1258.component';

@NgModule({
  declarations: [Page1258Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1258Component }])],
  exports: [Page1258Component]
})
export class Page1258Module {}
