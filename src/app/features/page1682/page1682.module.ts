import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1682Component } from './page1682.component';

@NgModule({
  declarations: [Page1682Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1682Component }])],
  exports: [Page1682Component]
})
export class Page1682Module {}
