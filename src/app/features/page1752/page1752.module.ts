import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1752Component } from './page1752.component';

@NgModule({
  declarations: [Page1752Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1752Component }])],
  exports: [Page1752Component]
})
export class Page1752Module {}
