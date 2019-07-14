import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1247Component } from './page1247.component';

@NgModule({
  declarations: [Page1247Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1247Component }])],
  exports: [Page1247Component]
})
export class Page1247Module {}
