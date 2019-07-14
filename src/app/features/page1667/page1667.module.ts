import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1667Component } from './page1667.component';

@NgModule({
  declarations: [Page1667Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1667Component }])],
  exports: [Page1667Component]
})
export class Page1667Module {}
