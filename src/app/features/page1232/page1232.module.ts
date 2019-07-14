import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1232Component } from './page1232.component';

@NgModule({
  declarations: [Page1232Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1232Component }])],
  exports: [Page1232Component]
})
export class Page1232Module {}
