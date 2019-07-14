import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1715Component } from './page1715.component';

@NgModule({
  declarations: [Page1715Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1715Component }])],
  exports: [Page1715Component]
})
export class Page1715Module {}
