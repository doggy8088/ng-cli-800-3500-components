import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1824Component } from './page1824.component';

@NgModule({
  declarations: [Page1824Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1824Component }])],
  exports: [Page1824Component]
})
export class Page1824Module {}
