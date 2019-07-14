import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1766Component } from './page1766.component';

@NgModule({
  declarations: [Page1766Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1766Component }])],
  exports: [Page1766Component]
})
export class Page1766Module {}
