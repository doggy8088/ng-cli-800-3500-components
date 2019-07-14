import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1886Component } from './page1886.component';

@NgModule({
  declarations: [Page1886Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1886Component }])],
  exports: [Page1886Component]
})
export class Page1886Module {}
