import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1772Component } from './page1772.component';

@NgModule({
  declarations: [Page1772Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1772Component }])],
  exports: [Page1772Component]
})
export class Page1772Module {}
