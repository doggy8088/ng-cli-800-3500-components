import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1302Component } from './page1302.component';

@NgModule({
  declarations: [Page1302Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1302Component }])],
  exports: [Page1302Component]
})
export class Page1302Module {}
