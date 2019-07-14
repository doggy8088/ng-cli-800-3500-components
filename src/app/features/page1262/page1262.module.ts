import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1262Component } from './page1262.component';

@NgModule({
  declarations: [Page1262Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1262Component }])],
  exports: [Page1262Component]
})
export class Page1262Module {}
