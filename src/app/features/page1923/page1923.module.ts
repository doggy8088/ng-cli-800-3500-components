import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1923Component } from './page1923.component';

@NgModule({
  declarations: [Page1923Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1923Component }])],
  exports: [Page1923Component]
})
export class Page1923Module {}
