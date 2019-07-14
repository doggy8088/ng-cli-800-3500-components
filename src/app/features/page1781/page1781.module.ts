import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1781Component } from './page1781.component';

@NgModule({
  declarations: [Page1781Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1781Component }])],
  exports: [Page1781Component]
})
export class Page1781Module {}
