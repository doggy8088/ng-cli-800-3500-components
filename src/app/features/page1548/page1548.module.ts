import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1548Component } from './page1548.component';

@NgModule({
  declarations: [Page1548Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1548Component }])],
  exports: [Page1548Component]
})
export class Page1548Module {}
