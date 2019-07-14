import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1533Component } from './page1533.component';

@NgModule({
  declarations: [Page1533Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1533Component }])],
  exports: [Page1533Component]
})
export class Page1533Module {}
