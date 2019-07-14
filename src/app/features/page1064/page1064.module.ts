import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1064Component } from './page1064.component';

@NgModule({
  declarations: [Page1064Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1064Component }])],
  exports: [Page1064Component]
})
export class Page1064Module {}
