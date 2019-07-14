import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1950Component } from './page1950.component';

@NgModule({
  declarations: [Page1950Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1950Component }])],
  exports: [Page1950Component]
})
export class Page1950Module {}
