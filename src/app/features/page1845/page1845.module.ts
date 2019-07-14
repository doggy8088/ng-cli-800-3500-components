import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1845Component } from './page1845.component';

@NgModule({
  declarations: [Page1845Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1845Component }])],
  exports: [Page1845Component]
})
export class Page1845Module {}
