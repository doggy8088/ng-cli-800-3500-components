import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1835Component } from './page1835.component';

@NgModule({
  declarations: [Page1835Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1835Component }])],
  exports: [Page1835Component]
})
export class Page1835Module {}
