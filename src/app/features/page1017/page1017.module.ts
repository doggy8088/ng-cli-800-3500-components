import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1017Component } from './page1017.component';

@NgModule({
  declarations: [Page1017Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1017Component }])],
  exports: [Page1017Component]
})
export class Page1017Module {}
