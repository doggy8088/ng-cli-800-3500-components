import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1392Component } from './page1392.component';

@NgModule({
  declarations: [Page1392Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1392Component }])],
  exports: [Page1392Component]
})
export class Page1392Module {}
