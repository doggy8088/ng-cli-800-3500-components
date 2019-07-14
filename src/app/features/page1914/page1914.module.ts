import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1914Component } from './page1914.component';

@NgModule({
  declarations: [Page1914Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1914Component }])],
  exports: [Page1914Component]
})
export class Page1914Module {}
