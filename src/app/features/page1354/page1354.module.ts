import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1354Component } from './page1354.component';

@NgModule({
  declarations: [Page1354Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1354Component }])],
  exports: [Page1354Component]
})
export class Page1354Module {}
