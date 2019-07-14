import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1237Component } from './page1237.component';

@NgModule({
  declarations: [Page1237Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1237Component }])],
  exports: [Page1237Component]
})
export class Page1237Module {}
