import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1036Component } from './page1036.component';

@NgModule({
  declarations: [Page1036Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1036Component }])],
  exports: [Page1036Component]
})
export class Page1036Module {}
