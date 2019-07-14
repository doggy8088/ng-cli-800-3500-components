import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1335Component } from './page1335.component';

@NgModule({
  declarations: [Page1335Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1335Component }])],
  exports: [Page1335Component]
})
export class Page1335Module {}
