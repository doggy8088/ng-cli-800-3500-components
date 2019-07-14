import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1136Component } from './page1136.component';

@NgModule({
  declarations: [Page1136Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1136Component }])],
  exports: [Page1136Component]
})
export class Page1136Module {}
