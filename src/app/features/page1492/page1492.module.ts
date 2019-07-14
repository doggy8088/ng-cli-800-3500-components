import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1492Component } from './page1492.component';

@NgModule({
  declarations: [Page1492Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1492Component }])],
  exports: [Page1492Component]
})
export class Page1492Module {}
