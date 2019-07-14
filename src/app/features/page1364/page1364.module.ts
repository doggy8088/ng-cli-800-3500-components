import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1364Component } from './page1364.component';

@NgModule({
  declarations: [Page1364Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1364Component }])],
  exports: [Page1364Component]
})
export class Page1364Module {}
