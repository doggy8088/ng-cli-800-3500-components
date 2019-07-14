import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Page1795Component } from './page1795.component';

@NgModule({
  declarations: [Page1795Component],
  imports: [RouterModule.forChild([{ path: '', component: Page1795Component }])],
  exports: [Page1795Component]
})
export class Page1795Module {}
