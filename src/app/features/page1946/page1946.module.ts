import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1946Component } from './page1946.component';

@NgModule({
  declarations: [Page1946Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1946Component }])],
  exports: [Page1946Component]
})
export class Page1946Module {}
