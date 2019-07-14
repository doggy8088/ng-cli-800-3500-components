import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1905Component } from './page1905.component';

@NgModule({
  declarations: [Page1905Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1905Component }])],
  exports: [Page1905Component]
})
export class Page1905Module {}
