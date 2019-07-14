import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1461Component } from './page1461.component';

@NgModule({
  declarations: [Page1461Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1461Component }])],
  exports: [Page1461Component]
})
export class Page1461Module {}
