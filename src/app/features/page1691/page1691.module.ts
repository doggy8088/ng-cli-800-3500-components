import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1691Component } from './page1691.component';

@NgModule({
  declarations: [Page1691Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1691Component }])],
  exports: [Page1691Component]
})
export class Page1691Module {}
