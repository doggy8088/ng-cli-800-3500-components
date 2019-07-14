import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1668Component } from './page1668.component';

@NgModule({
  declarations: [Page1668Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1668Component }])],
  exports: [Page1668Component]
})
export class Page1668Module {}
