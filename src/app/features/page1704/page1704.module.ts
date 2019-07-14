import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1704Component } from './page1704.component';

@NgModule({
  declarations: [Page1704Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1704Component }])],
  exports: [Page1704Component]
})
export class Page1704Module {}
