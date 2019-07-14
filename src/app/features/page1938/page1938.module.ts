import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1938Component } from './page1938.component';

@NgModule({
  declarations: [Page1938Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1938Component }])],
  exports: [Page1938Component]
})
export class Page1938Module {}
