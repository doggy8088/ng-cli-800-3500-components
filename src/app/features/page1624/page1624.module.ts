import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1624Component } from './page1624.component';

@NgModule({
  declarations: [Page1624Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1624Component }])],
  exports: [Page1624Component]
})
export class Page1624Module {}
