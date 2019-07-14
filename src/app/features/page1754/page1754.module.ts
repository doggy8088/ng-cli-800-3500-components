import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1754Component } from './page1754.component';

@NgModule({
  declarations: [Page1754Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1754Component }])],
  exports: [Page1754Component]
})
export class Page1754Module {}
