import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1699Component } from './page1699.component';

@NgModule({
  declarations: [Page1699Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1699Component }])],
  exports: [Page1699Component]
})
export class Page1699Module {}
