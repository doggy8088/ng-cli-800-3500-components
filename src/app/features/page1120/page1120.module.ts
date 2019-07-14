import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1120Component } from './page1120.component';

@NgModule({
  declarations: [Page1120Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1120Component }])],
  exports: [Page1120Component]
})
export class Page1120Module {}
