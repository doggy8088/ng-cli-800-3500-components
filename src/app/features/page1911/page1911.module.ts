import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1911Component } from './page1911.component';

@NgModule({
  declarations: [Page1911Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1911Component }])],
  exports: [Page1911Component]
})
export class Page1911Module {}
