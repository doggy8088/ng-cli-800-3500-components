import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1551Component } from './page1551.component';

@NgModule({
  declarations: [Page1551Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1551Component }])],
  exports: [Page1551Component]
})
export class Page1551Module {}
