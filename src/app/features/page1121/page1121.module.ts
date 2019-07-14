import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1121Component } from './page1121.component';

@NgModule({
  declarations: [Page1121Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1121Component }])],
  exports: [Page1121Component]
})
export class Page1121Module {}
