import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1574Component } from './page1574.component';

@NgModule({
  declarations: [Page1574Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1574Component }])],
  exports: [Page1574Component]
})
export class Page1574Module {}
