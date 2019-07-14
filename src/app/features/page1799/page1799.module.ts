import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1799Component } from './page1799.component';

@NgModule({
  declarations: [Page1799Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1799Component }])],
  exports: [Page1799Component]
})
export class Page1799Module {}
