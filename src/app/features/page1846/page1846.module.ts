import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1846Component } from './page1846.component';

@NgModule({
  declarations: [Page1846Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1846Component }])],
  exports: [Page1846Component]
})
export class Page1846Module {}
