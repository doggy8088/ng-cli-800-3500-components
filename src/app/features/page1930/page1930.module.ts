import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1930Component } from './page1930.component';

@NgModule({
  declarations: [Page1930Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1930Component }])],
  exports: [Page1930Component]
})
export class Page1930Module {}
