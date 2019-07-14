import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1390Component } from './page1390.component';

@NgModule({
  declarations: [Page1390Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1390Component }])],
  exports: [Page1390Component]
})
export class Page1390Module {}
