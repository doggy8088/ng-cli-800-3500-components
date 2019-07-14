import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1988Component } from './page1988.component';

@NgModule({
  declarations: [Page1988Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1988Component }])],
  exports: [Page1988Component]
})
export class Page1988Module {}
