import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1605Component } from './page1605.component';

@NgModule({
  declarations: [Page1605Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1605Component }])],
  exports: [Page1605Component]
})
export class Page1605Module {}
