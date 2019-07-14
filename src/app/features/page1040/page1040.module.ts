import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1040Component } from './page1040.component';

@NgModule({
  declarations: [Page1040Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1040Component }])],
  exports: [Page1040Component]
})
export class Page1040Module {}
