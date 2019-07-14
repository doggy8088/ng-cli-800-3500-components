import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1598Component } from './page1598.component';

@NgModule({
  declarations: [Page1598Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1598Component }])],
  exports: [Page1598Component]
})
export class Page1598Module {}
