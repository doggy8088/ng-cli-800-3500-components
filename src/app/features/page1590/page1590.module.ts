import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1590Component } from './page1590.component';

@NgModule({
  declarations: [Page1590Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1590Component }])],
  exports: [Page1590Component]
})
export class Page1590Module {}
