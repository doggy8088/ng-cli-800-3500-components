import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1455Component } from './page1455.component';

@NgModule({
  declarations: [Page1455Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1455Component }])],
  exports: [Page1455Component]
})
export class Page1455Module {}
