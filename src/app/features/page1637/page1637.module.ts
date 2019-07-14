import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1637Component } from './page1637.component';

@NgModule({
  declarations: [Page1637Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1637Component }])],
  exports: [Page1637Component]
})
export class Page1637Module {}
