import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1807Component } from './page1807.component';

@NgModule({
  declarations: [Page1807Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1807Component }])],
  exports: [Page1807Component]
})
export class Page1807Module {}
