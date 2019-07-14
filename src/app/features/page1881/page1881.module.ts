import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1881Component } from './page1881.component';

@NgModule({
  declarations: [Page1881Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1881Component }])],
  exports: [Page1881Component]
})
export class Page1881Module {}
