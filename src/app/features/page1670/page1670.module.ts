import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1670Component } from './page1670.component';

@NgModule({
  declarations: [Page1670Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1670Component }])],
  exports: [Page1670Component]
})
export class Page1670Module {}
