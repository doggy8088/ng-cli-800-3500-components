import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1736Component } from './page1736.component';

@NgModule({
  declarations: [Page1736Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1736Component }])],
  exports: [Page1736Component]
})
export class Page1736Module {}
