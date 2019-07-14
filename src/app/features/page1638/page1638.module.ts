import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1638Component } from './page1638.component';

@NgModule({
  declarations: [Page1638Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1638Component }])],
  exports: [Page1638Component]
})
export class Page1638Module {}
