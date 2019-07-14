import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1028Component } from './page1028.component';

@NgModule({
  declarations: [Page1028Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1028Component }])],
  exports: [Page1028Component]
})
export class Page1028Module {}
