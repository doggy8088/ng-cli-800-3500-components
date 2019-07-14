import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1916Component } from './page1916.component';

@NgModule({
  declarations: [Page1916Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1916Component }])],
  exports: [Page1916Component]
})
export class Page1916Module {}
