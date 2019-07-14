import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1806Component } from './page1806.component';

@NgModule({
  declarations: [Page1806Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1806Component }])],
  exports: [Page1806Component]
})
export class Page1806Module {}
