import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1777Component } from './page1777.component';

@NgModule({
  declarations: [Page1777Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1777Component }])],
  exports: [Page1777Component]
})
export class Page1777Module {}
