import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1194Component } from './page1194.component';

@NgModule({
  declarations: [Page1194Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1194Component }])],
  exports: [Page1194Component]
})
export class Page1194Module {}
