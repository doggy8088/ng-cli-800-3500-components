import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1868Component } from './page1868.component';

@NgModule({
  declarations: [Page1868Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1868Component }])],
  exports: [Page1868Component]
})
export class Page1868Module {}
