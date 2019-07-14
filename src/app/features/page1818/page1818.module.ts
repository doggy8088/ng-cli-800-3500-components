import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1818Component } from './page1818.component';

@NgModule({
  declarations: [Page1818Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1818Component }])],
  exports: [Page1818Component]
})
export class Page1818Module {}
