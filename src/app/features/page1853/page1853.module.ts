import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1853Component } from './page1853.component';

@NgModule({
  declarations: [Page1853Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1853Component }])],
  exports: [Page1853Component]
})
export class Page1853Module {}
