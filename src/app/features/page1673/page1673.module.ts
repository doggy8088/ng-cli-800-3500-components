import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1673Component } from './page1673.component';

@NgModule({
  declarations: [Page1673Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1673Component }])],
  exports: [Page1673Component]
})
export class Page1673Module {}
