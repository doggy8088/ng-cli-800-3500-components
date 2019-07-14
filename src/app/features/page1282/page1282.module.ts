import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1282Component } from './page1282.component';

@NgModule({
  declarations: [Page1282Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1282Component }])],
  exports: [Page1282Component]
})
export class Page1282Module {}
