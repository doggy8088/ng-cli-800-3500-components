import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1229Component } from './page1229.component';

@NgModule({
  declarations: [Page1229Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1229Component }])],
  exports: [Page1229Component]
})
export class Page1229Module {}
