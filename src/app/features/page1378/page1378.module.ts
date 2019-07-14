import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1378Component } from './page1378.component';

@NgModule({
  declarations: [Page1378Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1378Component }])],
  exports: [Page1378Component]
})
export class Page1378Module {}
