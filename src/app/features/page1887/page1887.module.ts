import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1887Component } from './page1887.component';

@NgModule({
  declarations: [Page1887Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1887Component }])],
  exports: [Page1887Component]
})
export class Page1887Module {}
