import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1502Component } from './page1502.component';

@NgModule({
  declarations: [Page1502Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1502Component }])],
  exports: [Page1502Component]
})
export class Page1502Module {}
