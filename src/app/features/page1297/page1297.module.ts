import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1297Component } from './page1297.component';

@NgModule({
  declarations: [Page1297Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1297Component }])],
  exports: [Page1297Component]
})
export class Page1297Module {}
