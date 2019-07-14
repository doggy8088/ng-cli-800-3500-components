import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1538Component } from './page1538.component';

@NgModule({
  declarations: [Page1538Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1538Component }])],
  exports: [Page1538Component]
})
export class Page1538Module {}
