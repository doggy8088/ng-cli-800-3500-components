import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1964Component } from './page1964.component';

@NgModule({
  declarations: [Page1964Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1964Component }])],
  exports: [Page1964Component]
})
export class Page1964Module {}
