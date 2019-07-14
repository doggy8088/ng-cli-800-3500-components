import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1163Component } from './page1163.component';

@NgModule({
  declarations: [Page1163Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1163Component }])],
  exports: [Page1163Component]
})
export class Page1163Module {}
