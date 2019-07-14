import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1458Component } from './page1458.component';

@NgModule({
  declarations: [Page1458Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1458Component }])],
  exports: [Page1458Component]
})
export class Page1458Module {}
