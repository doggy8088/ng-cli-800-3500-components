import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1168Component } from './page1168.component';

@NgModule({
  declarations: [Page1168Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1168Component }])],
  exports: [Page1168Component]
})
export class Page1168Module {}
