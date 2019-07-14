import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1991Component } from './page1991.component';

@NgModule({
  declarations: [Page1991Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1991Component }])],
  exports: [Page1991Component]
})
export class Page1991Module {}
