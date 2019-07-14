import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1009Component } from './page1009.component';

@NgModule({
  declarations: [Page1009Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1009Component }])],
  exports: [Page1009Component]
})
export class Page1009Module {}
