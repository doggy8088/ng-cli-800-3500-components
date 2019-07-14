import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1173Component } from './page1173.component';

@NgModule({
  declarations: [Page1173Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1173Component }])],
  exports: [Page1173Component]
})
export class Page1173Module {}
