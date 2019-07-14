import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1469Component } from './page1469.component';

@NgModule({
  declarations: [Page1469Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1469Component }])],
  exports: [Page1469Component]
})
export class Page1469Module {}
