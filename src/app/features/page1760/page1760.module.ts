import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1760Component } from './page1760.component';

@NgModule({
  declarations: [Page1760Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1760Component }])],
  exports: [Page1760Component]
})
export class Page1760Module {}
