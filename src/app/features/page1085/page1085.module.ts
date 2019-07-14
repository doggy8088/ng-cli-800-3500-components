import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1085Component } from './page1085.component';

@NgModule({
  declarations: [Page1085Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1085Component }])],
  exports: [Page1085Component]
})
export class Page1085Module {}
