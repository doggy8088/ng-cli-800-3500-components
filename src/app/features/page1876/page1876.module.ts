import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1876Component } from './page1876.component';

@NgModule({
  declarations: [Page1876Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1876Component }])],
  exports: [Page1876Component]
})
export class Page1876Module {}
