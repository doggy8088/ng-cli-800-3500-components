import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1632Component } from './page1632.component';

@NgModule({
  declarations: [Page1632Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1632Component }])],
  exports: [Page1632Component]
})
export class Page1632Module {}
