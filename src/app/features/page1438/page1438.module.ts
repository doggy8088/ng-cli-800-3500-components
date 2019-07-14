import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1438Component } from './page1438.component';

@NgModule({
  declarations: [Page1438Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1438Component }])],
  exports: [Page1438Component]
})
export class Page1438Module {}
