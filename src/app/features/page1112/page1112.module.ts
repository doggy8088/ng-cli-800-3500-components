import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1112Component } from './page1112.component';

@NgModule({
  declarations: [Page1112Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1112Component }])],
  exports: [Page1112Component]
})
export class Page1112Module {}
