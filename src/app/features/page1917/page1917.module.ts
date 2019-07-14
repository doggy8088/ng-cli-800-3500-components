import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1917Component } from './page1917.component';

@NgModule({
  declarations: [Page1917Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1917Component }])],
  exports: [Page1917Component]
})
export class Page1917Module {}
