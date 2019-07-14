import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1498Component } from './page1498.component';

@NgModule({
  declarations: [Page1498Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1498Component }])],
  exports: [Page1498Component]
})
export class Page1498Module {}
