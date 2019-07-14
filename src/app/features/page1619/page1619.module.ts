import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1619Component } from './page1619.component';

@NgModule({
  declarations: [Page1619Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1619Component }])],
  exports: [Page1619Component]
})
export class Page1619Module {}
