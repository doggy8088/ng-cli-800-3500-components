import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1550Component } from './page1550.component';

@NgModule({
  declarations: [Page1550Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1550Component }])],
  exports: [Page1550Component]
})
export class Page1550Module {}
