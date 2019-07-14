import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1142Component } from './page1142.component';

@NgModule({
  declarations: [Page1142Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1142Component }])],
  exports: [Page1142Component]
})
export class Page1142Module {}
