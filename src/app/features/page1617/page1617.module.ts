import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1617Component } from './page1617.component';

@NgModule({
  declarations: [Page1617Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1617Component }])],
  exports: [Page1617Component]
})
export class Page1617Module {}
