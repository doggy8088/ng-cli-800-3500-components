import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1653Component } from './page1653.component';

@NgModule({
  declarations: [Page1653Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1653Component }])],
  exports: [Page1653Component]
})
export class Page1653Module {}
