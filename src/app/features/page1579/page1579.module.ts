import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1579Component } from './page1579.component';

@NgModule({
  declarations: [Page1579Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1579Component }])],
  exports: [Page1579Component]
})
export class Page1579Module {}
