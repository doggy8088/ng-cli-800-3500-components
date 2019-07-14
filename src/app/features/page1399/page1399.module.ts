import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1399Component } from './page1399.component';

@NgModule({
  declarations: [Page1399Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1399Component }])],
  exports: [Page1399Component]
})
export class Page1399Module {}
