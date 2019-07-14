import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1210Component } from './page1210.component';

@NgModule({
  declarations: [Page1210Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1210Component }])],
  exports: [Page1210Component]
})
export class Page1210Module {}
