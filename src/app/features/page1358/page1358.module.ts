import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1358Component } from './page1358.component';

@NgModule({
  declarations: [Page1358Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1358Component }])],
  exports: [Page1358Component]
})
export class Page1358Module {}
