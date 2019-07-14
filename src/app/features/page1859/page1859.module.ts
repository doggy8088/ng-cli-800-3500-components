import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1859Component } from './page1859.component';

@NgModule({
  declarations: [Page1859Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1859Component }])],
  exports: [Page1859Component]
})
export class Page1859Module {}
