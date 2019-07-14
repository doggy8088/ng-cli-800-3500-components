import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1651Component } from './page1651.component';

@NgModule({
  declarations: [Page1651Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1651Component }])],
  exports: [Page1651Component]
})
export class Page1651Module {}
