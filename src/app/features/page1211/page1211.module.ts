import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1211Component } from './page1211.component';

@NgModule({
  declarations: [Page1211Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1211Component }])],
  exports: [Page1211Component]
})
export class Page1211Module {}
