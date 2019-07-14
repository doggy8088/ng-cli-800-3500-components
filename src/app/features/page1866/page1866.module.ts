import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1866Component } from './page1866.component';

@NgModule({
  declarations: [Page1866Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1866Component }])],
  exports: [Page1866Component]
})
export class Page1866Module {}
