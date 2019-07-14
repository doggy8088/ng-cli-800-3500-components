import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1604Component } from './page1604.component';

@NgModule({
  declarations: [Page1604Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1604Component }])],
  exports: [Page1604Component]
})
export class Page1604Module {}
