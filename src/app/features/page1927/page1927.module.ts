import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1927Component } from './page1927.component';

@NgModule({
  declarations: [Page1927Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1927Component }])],
  exports: [Page1927Component]
})
export class Page1927Module {}
