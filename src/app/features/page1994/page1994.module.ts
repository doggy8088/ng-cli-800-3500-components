import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1994Component } from './page1994.component';

@NgModule({
  declarations: [Page1994Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1994Component }])],
  exports: [Page1994Component]
})
export class Page1994Module {}
