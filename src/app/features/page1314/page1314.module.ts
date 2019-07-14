import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1314Component } from './page1314.component';

@NgModule({
  declarations: [Page1314Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1314Component }])],
  exports: [Page1314Component]
})
export class Page1314Module {}
