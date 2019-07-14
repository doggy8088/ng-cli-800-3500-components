import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1953Component } from './page1953.component';

@NgModule({
  declarations: [Page1953Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1953Component }])],
  exports: [Page1953Component]
})
export class Page1953Module {}
