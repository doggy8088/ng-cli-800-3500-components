import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1428Component } from './page1428.component';

@NgModule({
  declarations: [Page1428Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1428Component }])],
  exports: [Page1428Component]
})
export class Page1428Module {}
