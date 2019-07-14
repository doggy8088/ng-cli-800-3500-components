import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1287Component } from './page1287.component';

@NgModule({
  declarations: [Page1287Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1287Component }])],
  exports: [Page1287Component]
})
export class Page1287Module {}
