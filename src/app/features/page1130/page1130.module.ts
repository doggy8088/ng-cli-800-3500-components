import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1130Component } from './page1130.component';

@NgModule({
  declarations: [Page1130Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1130Component }])],
  exports: [Page1130Component]
})
export class Page1130Module {}
