import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1243Component } from './page1243.component';

@NgModule({
  declarations: [Page1243Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1243Component }])],
  exports: [Page1243Component]
})
export class Page1243Module {}
