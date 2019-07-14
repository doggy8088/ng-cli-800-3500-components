import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1555Component } from './page1555.component';

@NgModule({
  declarations: [Page1555Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1555Component }])],
  exports: [Page1555Component]
})
export class Page1555Module {}
