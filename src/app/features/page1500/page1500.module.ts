import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1500Component } from './page1500.component';

@NgModule({
  declarations: [Page1500Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1500Component }])],
  exports: [Page1500Component]
})
export class Page1500Module {}
