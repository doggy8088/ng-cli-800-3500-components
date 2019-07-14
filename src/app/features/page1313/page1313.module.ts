import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1313Component } from './page1313.component';

@NgModule({
  declarations: [Page1313Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1313Component }])],
  exports: [Page1313Component]
})
export class Page1313Module {}
