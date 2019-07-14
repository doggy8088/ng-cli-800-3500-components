import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1126Component } from './page1126.component';

@NgModule({
  declarations: [Page1126Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1126Component }])],
  exports: [Page1126Component]
})
export class Page1126Module {}
