import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1552Component } from './page1552.component';

@NgModule({
  declarations: [Page1552Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1552Component }])],
  exports: [Page1552Component]
})
export class Page1552Module {}
