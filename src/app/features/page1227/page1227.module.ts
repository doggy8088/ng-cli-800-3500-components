import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1227Component } from './page1227.component';

@NgModule({
  declarations: [Page1227Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1227Component }])],
  exports: [Page1227Component]
})
export class Page1227Module {}
