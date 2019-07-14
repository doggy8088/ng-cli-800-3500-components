import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1270Component } from './page1270.component';

@NgModule({
  declarations: [Page1270Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1270Component }])],
  exports: [Page1270Component]
})
export class Page1270Module {}
