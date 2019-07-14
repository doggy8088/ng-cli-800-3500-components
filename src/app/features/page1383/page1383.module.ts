import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1383Component } from './page1383.component';

@NgModule({
  declarations: [Page1383Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1383Component }])],
  exports: [Page1383Component]
})
export class Page1383Module {}
