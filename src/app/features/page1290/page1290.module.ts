import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1290Component } from './page1290.component';

@NgModule({
  declarations: [Page1290Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1290Component }])],
  exports: [Page1290Component]
})
export class Page1290Module {}
