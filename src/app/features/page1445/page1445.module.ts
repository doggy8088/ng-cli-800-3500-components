import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1445Component } from './page1445.component';

@NgModule({
  declarations: [Page1445Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1445Component }])],
  exports: [Page1445Component]
})
export class Page1445Module {}
