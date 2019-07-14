import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1069Component } from './page1069.component';

@NgModule({
  declarations: [Page1069Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1069Component }])],
  exports: [Page1069Component]
})
export class Page1069Module {}
