import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1078Component } from './page1078.component';

@NgModule({
  declarations: [Page1078Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1078Component }])],
  exports: [Page1078Component]
})
export class Page1078Module {}
