import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1943Component } from './page1943.component';

@NgModule({
  declarations: [Page1943Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1943Component }])],
  exports: [Page1943Component]
})
export class Page1943Module {}
