import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1416Component } from './page1416.component';

@NgModule({
  declarations: [Page1416Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1416Component }])],
  exports: [Page1416Component]
})
export class Page1416Module {}
