import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1794Component } from './page1794.component';

@NgModule({
  declarations: [Page1794Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1794Component }])],
  exports: [Page1794Component]
})
export class Page1794Module {}
