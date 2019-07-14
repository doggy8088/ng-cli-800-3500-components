import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1510Component } from './page1510.component';

@NgModule({
  declarations: [Page1510Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1510Component }])],
  exports: [Page1510Component]
})
export class Page1510Module {}
