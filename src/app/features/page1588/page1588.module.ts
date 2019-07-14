import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1588Component } from './page1588.component';

@NgModule({
  declarations: [Page1588Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1588Component }])],
  exports: [Page1588Component]
})
export class Page1588Module {}
