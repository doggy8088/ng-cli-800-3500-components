import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1785Component } from './page1785.component';

@NgModule({
  declarations: [Page1785Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1785Component }])],
  exports: [Page1785Component]
})
export class Page1785Module {}
