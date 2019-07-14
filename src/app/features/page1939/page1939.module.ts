import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1939Component } from './page1939.component';

@NgModule({
  declarations: [Page1939Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1939Component }])],
  exports: [Page1939Component]
})
export class Page1939Module {}
