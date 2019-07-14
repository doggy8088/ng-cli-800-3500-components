import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1701Component } from './page1701.component';

@NgModule({
  declarations: [Page1701Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1701Component }])],
  exports: [Page1701Component]
})
export class Page1701Module {}
