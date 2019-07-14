import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1395Component } from './page1395.component';

@NgModule({
  declarations: [Page1395Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1395Component }])],
  exports: [Page1395Component]
})
export class Page1395Module {}
