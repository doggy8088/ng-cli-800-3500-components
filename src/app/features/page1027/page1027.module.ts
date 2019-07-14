import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1027Component } from './page1027.component';

@NgModule({
  declarations: [Page1027Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1027Component }])],
  exports: [Page1027Component]
})
export class Page1027Module {}
