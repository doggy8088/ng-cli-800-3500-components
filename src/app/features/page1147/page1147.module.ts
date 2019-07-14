import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1147Component } from './page1147.component';

@NgModule({
  declarations: [Page1147Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1147Component }])],
  exports: [Page1147Component]
})
export class Page1147Module {}
