import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1425Component } from './page1425.component';

@NgModule({
  declarations: [Page1425Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1425Component }])],
  exports: [Page1425Component]
})
export class Page1425Module {}
