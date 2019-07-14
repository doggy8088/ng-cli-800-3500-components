import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1052Component } from './page1052.component';

@NgModule({
  declarations: [Page1052Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1052Component }])],
  exports: [Page1052Component]
})
export class Page1052Module {}
