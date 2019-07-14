import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1790Component } from './page1790.component';

@NgModule({
  declarations: [Page1790Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1790Component }])],
  exports: [Page1790Component]
})
export class Page1790Module {}
