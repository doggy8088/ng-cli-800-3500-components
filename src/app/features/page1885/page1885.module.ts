import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1885Component } from './page1885.component';

@NgModule({
  declarations: [Page1885Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1885Component }])],
  exports: [Page1885Component]
})
export class Page1885Module {}
