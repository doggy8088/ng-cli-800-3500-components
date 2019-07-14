import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1209Component } from './page1209.component';

@NgModule({
  declarations: [Page1209Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1209Component }])],
  exports: [Page1209Component]
})
export class Page1209Module {}
