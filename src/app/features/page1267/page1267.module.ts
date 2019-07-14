import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1267Component } from './page1267.component';

@NgModule({
  declarations: [Page1267Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1267Component }])],
  exports: [Page1267Component]
})
export class Page1267Module {}
