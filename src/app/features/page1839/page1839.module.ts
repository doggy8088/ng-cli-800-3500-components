import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1839Component } from './page1839.component';

@NgModule({
  declarations: [Page1839Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1839Component }])],
  exports: [Page1839Component]
})
export class Page1839Module {}
