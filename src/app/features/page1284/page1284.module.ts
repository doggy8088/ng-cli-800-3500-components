import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1284Component } from './page1284.component';

@NgModule({
  declarations: [Page1284Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1284Component }])],
  exports: [Page1284Component]
})
export class Page1284Module {}
