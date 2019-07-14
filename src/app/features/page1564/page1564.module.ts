import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1564Component } from './page1564.component';

@NgModule({
  declarations: [Page1564Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1564Component }])],
  exports: [Page1564Component]
})
export class Page1564Module {}
