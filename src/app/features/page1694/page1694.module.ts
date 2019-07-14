import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1694Component } from './page1694.component';

@NgModule({
  declarations: [Page1694Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1694Component }])],
  exports: [Page1694Component]
})
export class Page1694Module {}
