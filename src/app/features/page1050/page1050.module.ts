import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1050Component } from './page1050.component';

@NgModule({
  declarations: [Page1050Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1050Component }])],
  exports: [Page1050Component]
})
export class Page1050Module {}
