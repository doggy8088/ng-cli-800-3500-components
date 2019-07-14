import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1944Component } from './page1944.component';

@NgModule({
  declarations: [Page1944Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1944Component }])],
  exports: [Page1944Component]
})
export class Page1944Module {}
