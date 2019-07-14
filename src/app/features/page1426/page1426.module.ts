import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1426Component } from './page1426.component';

@NgModule({
  declarations: [Page1426Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1426Component }])],
  exports: [Page1426Component]
})
export class Page1426Module {}
