import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1765Component } from './page1765.component';

@NgModule({
  declarations: [Page1765Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1765Component }])],
  exports: [Page1765Component]
})
export class Page1765Module {}
