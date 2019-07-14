import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1060Component } from './page1060.component';

@NgModule({
  declarations: [Page1060Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1060Component }])],
  exports: [Page1060Component]
})
export class Page1060Module {}
