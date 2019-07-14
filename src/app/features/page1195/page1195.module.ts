import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1195Component } from './page1195.component';

@NgModule({
  declarations: [Page1195Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1195Component }])],
  exports: [Page1195Component]
})
export class Page1195Module {}
