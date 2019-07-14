import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1464Component } from './page1464.component';

@NgModule({
  declarations: [Page1464Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1464Component }])],
  exports: [Page1464Component]
})
export class Page1464Module {}
