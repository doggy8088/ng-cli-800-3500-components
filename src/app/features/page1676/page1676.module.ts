import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1676Component } from './page1676.component';

@NgModule({
  declarations: [Page1676Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1676Component }])],
  exports: [Page1676Component]
})
export class Page1676Module {}
