import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1221Component } from './page1221.component';

@NgModule({
  declarations: [Page1221Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1221Component }])],
  exports: [Page1221Component]
})
export class Page1221Module {}
