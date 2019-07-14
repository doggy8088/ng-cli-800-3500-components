import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1833Component } from './page1833.component';

@NgModule({
  declarations: [Page1833Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1833Component }])],
  exports: [Page1833Component]
})
export class Page1833Module {}
