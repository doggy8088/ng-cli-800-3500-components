import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1093Component } from './page1093.component';

@NgModule({
  declarations: [Page1093Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1093Component }])],
  exports: [Page1093Component]
})
export class Page1093Module {}
