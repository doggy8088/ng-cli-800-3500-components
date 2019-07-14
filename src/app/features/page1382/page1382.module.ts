import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1382Component } from './page1382.component';

@NgModule({
  declarations: [Page1382Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1382Component }])],
  exports: [Page1382Component]
})
export class Page1382Module {}
