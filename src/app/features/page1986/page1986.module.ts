import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1986Component } from './page1986.component';

@NgModule({
  declarations: [Page1986Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1986Component }])],
  exports: [Page1986Component]
})
export class Page1986Module {}
