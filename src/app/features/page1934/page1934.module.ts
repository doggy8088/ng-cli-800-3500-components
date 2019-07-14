import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1934Component } from './page1934.component';

@NgModule({
  declarations: [Page1934Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1934Component }])],
  exports: [Page1934Component]
})
export class Page1934Module {}
