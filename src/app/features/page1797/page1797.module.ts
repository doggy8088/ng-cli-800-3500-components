import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1797Component } from './page1797.component';

@NgModule({
  declarations: [Page1797Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1797Component }])],
  exports: [Page1797Component]
})
export class Page1797Module {}
