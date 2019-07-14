import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1100Component } from './page1100.component';

@NgModule({
  declarations: [Page1100Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1100Component }])],
  exports: [Page1100Component]
})
export class Page1100Module {}
