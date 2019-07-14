import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1742Component } from './page1742.component';

@NgModule({
  declarations: [Page1742Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1742Component }])],
  exports: [Page1742Component]
})
export class Page1742Module {}
