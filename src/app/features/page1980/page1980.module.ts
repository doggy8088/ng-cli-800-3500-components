import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1980Component } from './page1980.component';

@NgModule({
  declarations: [Page1980Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1980Component }])],
  exports: [Page1980Component]
})
export class Page1980Module {}
