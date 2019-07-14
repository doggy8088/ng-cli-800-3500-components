import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1816Component } from './page1816.component';

@NgModule({
  declarations: [Page1816Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1816Component }])],
  exports: [Page1816Component]
})
export class Page1816Module {}
