import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1081Component } from './page1081.component';

@NgModule({
  declarations: [Page1081Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1081Component }])],
  exports: [Page1081Component]
})
export class Page1081Module {}
