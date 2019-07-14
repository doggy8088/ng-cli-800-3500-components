import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1951Component } from './page1951.component';

@NgModule({
  declarations: [Page1951Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1951Component }])],
  exports: [Page1951Component]
})
export class Page1951Module {}
