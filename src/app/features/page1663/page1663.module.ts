import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1663Component } from './page1663.component';

@NgModule({
  declarations: [Page1663Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1663Component }])],
  exports: [Page1663Component]
})
export class Page1663Module {}
