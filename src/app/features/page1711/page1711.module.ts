import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1711Component } from './page1711.component';

@NgModule({
  declarations: [Page1711Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1711Component }])],
  exports: [Page1711Component]
})
export class Page1711Module {}
