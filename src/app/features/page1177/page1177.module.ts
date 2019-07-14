import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1177Component } from './page1177.component';

@NgModule({
  declarations: [Page1177Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1177Component }])],
  exports: [Page1177Component]
})
export class Page1177Module {}
