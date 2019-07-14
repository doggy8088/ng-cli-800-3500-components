import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1091Component } from './page1091.component';

@NgModule({
  declarations: [Page1091Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1091Component }])],
  exports: [Page1091Component]
})
export class Page1091Module {}
