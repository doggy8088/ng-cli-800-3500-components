import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1734Component } from './page1734.component';

@NgModule({
  declarations: [Page1734Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1734Component }])],
  exports: [Page1734Component]
})
export class Page1734Module {}
