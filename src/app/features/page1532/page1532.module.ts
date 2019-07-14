import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1532Component } from './page1532.component';

@NgModule({
  declarations: [Page1532Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1532Component }])],
  exports: [Page1532Component]
})
export class Page1532Module {}
