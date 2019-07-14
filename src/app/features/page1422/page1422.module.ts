import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1422Component } from './page1422.component';

@NgModule({
  declarations: [Page1422Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1422Component }])],
  exports: [Page1422Component]
})
export class Page1422Module {}
