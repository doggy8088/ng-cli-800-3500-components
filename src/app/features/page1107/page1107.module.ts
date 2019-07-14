import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1107Component } from './page1107.component';

@NgModule({
  declarations: [Page1107Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1107Component }])],
  exports: [Page1107Component]
})
export class Page1107Module {}
