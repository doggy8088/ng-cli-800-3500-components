import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1117Component } from './page1117.component';

@NgModule({
  declarations: [Page1117Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1117Component }])],
  exports: [Page1117Component]
})
export class Page1117Module {}
