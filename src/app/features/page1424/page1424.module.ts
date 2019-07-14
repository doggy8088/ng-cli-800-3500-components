import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1424Component } from './page1424.component';

@NgModule({
  declarations: [Page1424Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1424Component }])],
  exports: [Page1424Component]
})
export class Page1424Module {}
