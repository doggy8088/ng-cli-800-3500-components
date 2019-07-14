import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1915Component } from './page1915.component';

@NgModule({
  declarations: [Page1915Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1915Component }])],
  exports: [Page1915Component]
})
export class Page1915Module {}
