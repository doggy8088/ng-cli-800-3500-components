import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1423Component } from './page1423.component';

@NgModule({
  declarations: [Page1423Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1423Component }])],
  exports: [Page1423Component]
})
export class Page1423Module {}
