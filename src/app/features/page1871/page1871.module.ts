import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1871Component } from './page1871.component';

@NgModule({
  declarations: [Page1871Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1871Component }])],
  exports: [Page1871Component]
})
export class Page1871Module {}
