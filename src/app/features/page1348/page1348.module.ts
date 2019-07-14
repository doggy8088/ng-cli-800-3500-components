import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1348Component } from './page1348.component';

@NgModule({
  declarations: [Page1348Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1348Component }])],
  exports: [Page1348Component]
})
export class Page1348Module {}
