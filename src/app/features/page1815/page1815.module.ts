import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1815Component } from './page1815.component';

@NgModule({
  declarations: [Page1815Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1815Component }])],
  exports: [Page1815Component]
})
export class Page1815Module {}
