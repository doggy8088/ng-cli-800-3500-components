import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1707Component } from './page1707.component';

@NgModule({
  declarations: [Page1707Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1707Component }])],
  exports: [Page1707Component]
})
export class Page1707Module {}
