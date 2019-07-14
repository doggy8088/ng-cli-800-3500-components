import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1910Component } from './page1910.component';

@NgModule({
  declarations: [Page1910Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1910Component }])],
  exports: [Page1910Component]
})
export class Page1910Module {}
