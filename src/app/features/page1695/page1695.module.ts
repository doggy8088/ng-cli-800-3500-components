import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1695Component } from './page1695.component';

@NgModule({
  declarations: [Page1695Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1695Component }])],
  exports: [Page1695Component]
})
export class Page1695Module {}
