import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1352Component } from './page1352.component';

@NgModule({
  declarations: [Page1352Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1352Component }])],
  exports: [Page1352Component]
})
export class Page1352Module {}
