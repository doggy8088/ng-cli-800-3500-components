import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1094Component } from './page1094.component';

@NgModule({
  declarations: [Page1094Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1094Component }])],
  exports: [Page1094Component]
})
export class Page1094Module {}
