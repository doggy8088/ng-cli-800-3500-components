import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1558Component } from './page1558.component';

@NgModule({
  declarations: [Page1558Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1558Component }])],
  exports: [Page1558Component]
})
export class Page1558Module {}
