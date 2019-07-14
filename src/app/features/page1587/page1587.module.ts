import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1587Component } from './page1587.component';

@NgModule({
  declarations: [Page1587Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1587Component }])],
  exports: [Page1587Component]
})
export class Page1587Module {}
