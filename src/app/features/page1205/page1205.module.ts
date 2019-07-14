import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1205Component } from './page1205.component';

@NgModule({
  declarations: [Page1205Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1205Component }])],
  exports: [Page1205Component]
})
export class Page1205Module {}
