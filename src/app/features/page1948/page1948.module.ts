import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1948Component } from './page1948.component';

@NgModule({
  declarations: [Page1948Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1948Component }])],
  exports: [Page1948Component]
})
export class Page1948Module {}
