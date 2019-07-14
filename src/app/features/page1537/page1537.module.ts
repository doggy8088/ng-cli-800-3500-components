import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1537Component } from './page1537.component';

@NgModule({
  declarations: [Page1537Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1537Component }])],
  exports: [Page1537Component]
})
export class Page1537Module {}
