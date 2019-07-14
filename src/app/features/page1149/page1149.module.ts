import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1149Component } from './page1149.component';

@NgModule({
  declarations: [Page1149Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1149Component }])],
  exports: [Page1149Component]
})
export class Page1149Module {}
