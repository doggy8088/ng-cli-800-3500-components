import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1530Component } from './page1530.component';

@NgModule({
  declarations: [Page1530Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1530Component }])],
  exports: [Page1530Component]
})
export class Page1530Module {}
