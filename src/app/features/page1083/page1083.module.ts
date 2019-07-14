import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1083Component } from './page1083.component';

@NgModule({
  declarations: [Page1083Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1083Component }])],
  exports: [Page1083Component]
})
export class Page1083Module {}
