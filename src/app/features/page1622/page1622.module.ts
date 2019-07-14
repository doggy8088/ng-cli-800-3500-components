import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1622Component } from './page1622.component';

@NgModule({
  declarations: [Page1622Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1622Component }])],
  exports: [Page1622Component]
})
export class Page1622Module {}
