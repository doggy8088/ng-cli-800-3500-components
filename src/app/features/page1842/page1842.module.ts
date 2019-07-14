import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1842Component } from './page1842.component';

@NgModule({
  declarations: [Page1842Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1842Component }])],
  exports: [Page1842Component]
})
export class Page1842Module {}
