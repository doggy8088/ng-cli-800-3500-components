import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1901Component } from './page1901.component';

@NgModule({
  declarations: [Page1901Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1901Component }])],
  exports: [Page1901Component]
})
export class Page1901Module {}
