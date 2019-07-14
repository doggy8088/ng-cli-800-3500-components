import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1098Component } from './page1098.component';

@NgModule({
  declarations: [Page1098Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1098Component }])],
  exports: [Page1098Component]
})
export class Page1098Module {}
