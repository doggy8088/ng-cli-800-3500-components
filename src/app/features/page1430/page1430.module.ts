import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1430Component } from './page1430.component';

@NgModule({
  declarations: [Page1430Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1430Component }])],
  exports: [Page1430Component]
})
export class Page1430Module {}
