import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1802Component } from './page1802.component';

@NgModule({
  declarations: [Page1802Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1802Component }])],
  exports: [Page1802Component]
})
export class Page1802Module {}
