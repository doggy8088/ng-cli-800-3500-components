import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1206Component } from './page1206.component';

@NgModule({
  declarations: [Page1206Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1206Component }])],
  exports: [Page1206Component]
})
export class Page1206Module {}
