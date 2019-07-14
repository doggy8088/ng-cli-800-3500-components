import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1113Component } from './page1113.component';

@NgModule({
  declarations: [Page1113Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1113Component }])],
  exports: [Page1113Component]
})
export class Page1113Module {}
