import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1621Component } from './page1621.component';

@NgModule({
  declarations: [Page1621Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1621Component }])],
  exports: [Page1621Component]
})
export class Page1621Module {}
