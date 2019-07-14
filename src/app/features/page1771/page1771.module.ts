import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1771Component } from './page1771.component';

@NgModule({
  declarations: [Page1771Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1771Component }])],
  exports: [Page1771Component]
})
export class Page1771Module {}
