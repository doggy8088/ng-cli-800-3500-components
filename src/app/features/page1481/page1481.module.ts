import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1481Component } from './page1481.component';

@NgModule({
  declarations: [Page1481Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1481Component }])],
  exports: [Page1481Component]
})
export class Page1481Module {}
