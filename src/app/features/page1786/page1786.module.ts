import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1786Component } from './page1786.component';

@NgModule({
  declarations: [Page1786Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1786Component }])],
  exports: [Page1786Component]
})
export class Page1786Module {}
