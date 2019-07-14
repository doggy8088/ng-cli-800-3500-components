import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1629Component } from './page1629.component';

@NgModule({
  declarations: [Page1629Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1629Component }])],
  exports: [Page1629Component]
})
export class Page1629Module {}
