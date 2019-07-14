import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1665Component } from './page1665.component';

@NgModule({
  declarations: [Page1665Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1665Component }])],
  exports: [Page1665Component]
})
export class Page1665Module {}
