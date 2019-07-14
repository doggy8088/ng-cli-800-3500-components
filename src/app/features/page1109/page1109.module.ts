import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1109Component } from './page1109.component';

@NgModule({
  declarations: [Page1109Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1109Component }])],
  exports: [Page1109Component]
})
export class Page1109Module {}
