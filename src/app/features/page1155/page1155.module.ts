import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1155Component } from './page1155.component';

@NgModule({
  declarations: [Page1155Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1155Component }])],
  exports: [Page1155Component]
})
export class Page1155Module {}
