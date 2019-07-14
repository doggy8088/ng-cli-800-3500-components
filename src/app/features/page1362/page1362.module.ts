import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1362Component } from './page1362.component';

@NgModule({
  declarations: [Page1362Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1362Component }])],
  exports: [Page1362Component]
})
export class Page1362Module {}
