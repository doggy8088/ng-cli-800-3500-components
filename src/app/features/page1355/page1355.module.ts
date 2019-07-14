import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1355Component } from './page1355.component';

@NgModule({
  declarations: [Page1355Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1355Component }])],
  exports: [Page1355Component]
})
export class Page1355Module {}
