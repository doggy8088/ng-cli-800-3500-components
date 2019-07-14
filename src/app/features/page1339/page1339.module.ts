import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1339Component } from './page1339.component';

@NgModule({
  declarations: [Page1339Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1339Component }])],
  exports: [Page1339Component]
})
export class Page1339Module {}
