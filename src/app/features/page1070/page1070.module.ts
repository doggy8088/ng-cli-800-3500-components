import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1070Component } from './page1070.component';

@NgModule({
  declarations: [Page1070Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1070Component }])],
  exports: [Page1070Component]
})
export class Page1070Module {}
