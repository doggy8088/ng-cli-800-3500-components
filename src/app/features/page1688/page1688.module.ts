import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1688Component } from './page1688.component';

@NgModule({
  declarations: [Page1688Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1688Component }])],
  exports: [Page1688Component]
})
export class Page1688Module {}
