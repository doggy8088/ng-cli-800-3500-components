import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1511Component } from './page1511.component';

@NgModule({
  declarations: [Page1511Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1511Component }])],
  exports: [Page1511Component]
})
export class Page1511Module {}
