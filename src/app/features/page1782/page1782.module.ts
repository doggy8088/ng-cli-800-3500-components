import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1782Component } from './page1782.component';

@NgModule({
  declarations: [Page1782Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1782Component }])],
  exports: [Page1782Component]
})
export class Page1782Module {}
