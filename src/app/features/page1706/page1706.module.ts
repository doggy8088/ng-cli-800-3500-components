import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1706Component } from './page1706.component';

@NgModule({
  declarations: [Page1706Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1706Component }])],
  exports: [Page1706Component]
})
export class Page1706Module {}
